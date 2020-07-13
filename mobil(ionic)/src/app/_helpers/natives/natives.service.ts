import { Injectable } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File, FileEntry, IFile } from '@ionic-native/file/ngx';
import { Base64 } from "@ionic-native/base64/ngx";
import { FileChooser } from "@ionic-native/file-chooser/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";


// everythings native i put it here
@Injectable({
  providedIn: 'root'
})
export class NativesService {

  constructor(
    private base64: Base64,
    private filePath: FilePath,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
    private file: File,
    private fileOpener: FileOpener,
    private document: DocumentViewer
  ) {


  }

  openDocument = (data) => {
    //  
  }

  openFile = (data) => {


  }

  downloadFile(data) {
    const blob = new Blob([data], { type: 'application/pdf' });
    //Determine a native file path to save to
    let filePath = this.file.externalRootDirectory;

    //Write the file
    this.file.writeFile(filePath, "mycv.pdf", blob, { replace: true }).then((fileEntry: FileEntry) => {
      //Open with File Opener plugin
      this.fileOpener.open(fileEntry.toURL(), data.type)
        .then(() => console.log('File is opened'))
        .catch(err => console.error('Error openening file: ' + err));
    })
      .catch((err) => {
        console.error("Error creating file: " + err);
        throw err;  //Rethrow - will be caught by caller
      });
  }




  getFileInfo(): Promise<any> {
    return this.fileChooser.open().then((fileURI) => {
      return this.filePath.resolveNativePath(fileURI).then((filePath) => {
        return this.file.resolveLocalFilesystemUrl(filePath).then((fileEntry: FileEntry) => {
          return new Promise((resolve, reject) => {
            fileEntry.file(meta => resolve(meta), error => reject(error));
          });
        }).then((fileMeta: IFile) => {
          return new Promise((resolve, reject) => {
            return this.base64.encodeFile(filePath).then((base64Data) => {
              resolve({
                fileData: base64Data,
                fileName: fileMeta.name,
                fileSize: fileMeta.size,
                fileType: fileMeta.type
              })
            }).catch((error) => {
              reject(error);
            })
          })
        });
      });
    });
  }



}
