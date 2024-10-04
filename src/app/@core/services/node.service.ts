import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Injectable()
export class NodeService {
    private http = inject(HttpClient);


    getFiles() {
        return this.http.get<any>('demo/data/files.json')
            .toPromise()
            .then(res => res.data as TreeNode[]);
    }

    getLazyFiles() {
        return this.http.get<any>('demo/data/files-lazy.json')
            .toPromise()
            .then(res => res.data as TreeNode[]);
    }

    getFilesystem() {
        return this.http.get<any>('demo/data/filesystem.json')
            .toPromise()
            .then(res => res.data as TreeNode[]);
    }

    getLazyFilesystem() {
        return this.http.get<any>('demo/data/filesystem-lazy.json')
            .toPromise()
            .then(res => res.data as TreeNode[]);
    }
}
