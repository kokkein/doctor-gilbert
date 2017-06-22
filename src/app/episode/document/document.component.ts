import { SpeechRecognitionService } from './../../services/SpeechRecognitionService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  text: string;
  showRecording: boolean;
  speechData: string;

constructor(private speechRecognitionService: SpeechRecognitionService) {
        this.showRecording = false;
        this.speechData = "";
        this.text = "";
    }

    ngOnInit() {
        console.log("hello")
    }

    ngOnDestroy() {
        this.speechRecognitionService.DestroySpeechObject();
    }

    activateSpeech(): void {
        this.showRecording = true;

        this.speechRecognitionService.record()
            .subscribe(
            //listener
            (value) => {
                this.speechData = value;
                console.log(value);
                this.text = this.text + this.speechData;
            },
            //errror
            (err) => {
                console.log(err);
                if (err.error == "no-speech") {
                    console.log("--restatring service--");
                    this.text = "--restatring service--";
                    this.activateSpeech();
                }
            },
            //completion
            () => {
                //this.showSearchButton = true;
                console.log("--complete--");
                this.text = "--complete--";
                this.activateSpeech();
            });
    }


  documents = [
    {name: 'Documents 1', edited: new Date('1/1/16'),},
    {name: 'Documents 2', edited: new Date('1/17/16'),},
    {name: 'Documents 3', edited: new Date('1/28/16'),}
  ];

}
