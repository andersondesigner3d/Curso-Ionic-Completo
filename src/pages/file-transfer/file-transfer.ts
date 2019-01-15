import { Component } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

@Component({
  selector: 'page-file-transfer',
  templateUrl: 'file-transfer.html',
})
export class FileTransferPage {

  constructor(private loadingCtrl : LoadingController, private transfer: FileTransfer, private toastCtrl : ToastController ,private fileChooser: FileChooser, private fileOpener: FileOpener, private filePath: FilePath) {
  }

  ionViewDidLoad() {
  }

  abrir() {

    this.fileChooser.open().then((file) => {

      this.filePath.resolveNativePath(file).then((resolvedFilePath) => {

        //acha extenção
        var extencao = resolvedFilePath.split('.');

        //se for pdf
        if (extencao[1] == 'pdf') {
          this.fileOpener.open(resolvedFilePath, 'application/pdf').then((value) => {
            console.log('Arquivo aberto!');
          }, (err3) => {
            const toast = this.toastCtrl.create({
              message: 'Erro no fileOpener:' + JSON.stringify(err3),
              duration: 3000,
              position: 'middle'
            });
            toast.present();
          });
        } else
          //se for jpeg
          if (extencao[1] == 'jpeg') {
            this.fileOpener.open(resolvedFilePath, 'image/jpeg').then((value) => {
              console.log('Arquivo aberto!');
            }, (err3) => {
              const toast = this.toastCtrl.create({
                message: 'Erro no fileOpener:' + JSON.stringify(err3),
                duration: 3000,
                position: 'middle'
              });
              toast.present();
            });
          } else
            //se for gif
            if (extencao[1] == 'gif') {
              this.fileOpener.open(resolvedFilePath, 'image/gif').then((value) => {
                console.log('Arquivo aberto!');
              }, (err3) => {
                const toast = this.toastCtrl.create({
                  message: 'Erro no fileOpener:' + JSON.stringify(err3),
                  duration: 3000,
                  position: 'middle'
                });
                toast.present();
              });
            } else
              //se for png
              if (extencao[1] == 'png') {
                this.fileOpener.open(resolvedFilePath, 'image/png').then((value) => {
                  console.log('Arquivo aberto!');
                }, (err3) => {
                  const toast = this.toastCtrl.create({
                    message: 'Erro no fileOpener:' + JSON.stringify(err3),
                    duration: 3000,
                    position: 'middle'
                  });
                  toast.present();
                });
              } else
                //se for jpg
                if (extencao[1] == 'jpg') {
                  this.fileOpener.open(resolvedFilePath, 'image/jpg').then((value) => {
                    console.log('Arquivo aberto!');
                  }, (err3) => {
                    const toast = this.toastCtrl.create({
                      message: 'Erro no fileOpener:' + JSON.stringify(err3),
                      duration: 3000,
                      position: 'middle'
                    });
                    toast.present();
                  });
                } else {
                  const toast = this.toastCtrl.create({
                    message: 'Erro: O arquivo não é um pdf ou uma imagem.',
                    duration: 3000,
                    position: 'middle'
                  });
                  toast.present();
                }

      }, (err2) => {
        const toast = this.toastCtrl.create({
          message: 'Erro no fileOpener:' + JSON.stringify(err2),
          duration: 3000,
          position: 'middle'
        });
        toast.present();
      });

    }, (err) => {
      const toast = this.toastCtrl.create({
        message: 'Erro no fileChooser:' + JSON.stringify(err),
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    });

  }

  enviar(){
    this.fileChooser.open().then((file)=>{

      this.filePath.resolveNativePath(file).then((resolvedFilePath)=>{

        //acha extenção
        var extencao = resolvedFilePath.split('.');
        var filename = Math.random().toString(36) + '.' + extencao[1];
        
        var options = {
          fileKey: "file",
          fileName: filename,
          chunkedMode: false,
          mimeType: "multipart/form-data",
          params: { 'fileName': filename }
        };

        const fileTransfer: FileTransferObject = this.transfer.create();
        const loading = this.loadingCtrl.create({
          spinner: 'dots'//ios,ios-small,bubbles,circles,crescent,dots
        });
        loading.present();

        fileTransfer.upload(resolvedFilePath,'https://www.acumulando.com.br/ionic_file_transfer.php',options).then((success)=>{
          loading.dismiss();
          const toast = this.toastCtrl.create({
            message: 'Upload com sucesso!',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        },(err)=>{
          loading.dismiss();
          const toast = this.toastCtrl.create({
            message: 'Erro no fileTransfer:' + JSON.stringify(err),
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        });        

      },(err)=>{
        const toast = this.toastCtrl.create({
          message: 'Erro no filePath:' + JSON.stringify(err),
          duration: 3000,
          position: 'middle'
        });
        toast.present();
      });

    },(err)=>{
      const toast = this.toastCtrl.create({
        message: 'Erro no fileChooser:' + JSON.stringify(err),
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    });
  }

}
