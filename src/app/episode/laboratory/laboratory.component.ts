import { Component, OnInit } from '@angular/core';
import { TreeTableModule, TreeNode } from 'primeng/primeng';
import { NodeService } from './../../services/NodeService';


@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {


    files: TreeNode[];
    selectedFiles: TreeNode[];

    constructor(private nodeService: NodeService) {}
    
    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files = files);
    }
 
    nodeSelect(event) {
        //event.node = selected node
    }

}
