import { Component, inject } from '@angular/core';
import { MessageService, SharedModule } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';


@Component({
    templateUrl: './filedemo.component.html',
    providers: [MessageService],
    standalone: true,
    imports: [FileUploadModule, SharedModule]
})
export class FileDemoComponent {
    private messageService = inject(MessageService);


    uploadedFiles: any[] = [];

    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    onBasicUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

}
