import { Component, OnInit, inject } from '@angular/core';
import { TreeNode, SharedModule } from 'primeng/api';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';

import { NodeService } from 'src/app/@core/services/node.service';

@Component({
    templateUrl: './treedemo.component.html',
    standalone: true,
    imports: [TreeModule, TreeTableModule, SharedModule]
})
export class TreeDemoComponent implements OnInit {
    private nodeService = inject(NodeService);


    files1: TreeNode[] = [];

    files2: TreeNode[] = [];

    files3: TreeNode[] = [];

    selectedFiles1: TreeNode[] = [];

    selectedFiles2: TreeNode[] = [];

    selectedFiles3: TreeNode = {};

    cols: any[] = [];

    ngOnInit() {
        this.nodeService.getFiles().then(files => this.files1 = files);
        this.nodeService.getFilesystem().then(files => this.files2 = files);
        this.nodeService.getFiles().then(files => {
            this.files3 = [{
                label: 'Root',
                children: files
            }];
        });

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    }
}
