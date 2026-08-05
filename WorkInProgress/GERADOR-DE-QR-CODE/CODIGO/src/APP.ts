import * as QRCode from 'qrcode';
import * as fs from 'fs';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function gerarQRCode(texto: string, nomeArquivo: string): Promise<void> {
    try {
        await QRCode.toFile(nomeArquivo, texto);
        
        console.log(`QR Code gerado com sucesso!`);
        console.log(`O arquivo "${nomeArquivo}" foi criado.`);
    } catch (error) {
        console.error('Erro ao gerar o QR Code:', error);
    }
}

function obterTextoDoUsuario(): Promise<string> {
    return new Promise((resolve, reject) => {
        rl.question('😎Digite o texto para gerar o QR Code: \n>>>', (texto: string) => {
            if (texto.trim() === '') {
                console.error('😡Erro: O texto não pode estar vazio!');
                reject();
            } else {
                resolve(texto);
            }
            rl.close();
        });
    });
}

async function main() {
    try {
        const textoParaQRCode = await obterTextoDoUsuario();
        const nomeArquivo = 'qr_code.png';
        await gerarQRCode(textoParaQRCode, nomeArquivo);
    } catch (error) {
        console.error('Erro ao gerar o QR Code:', error);
    }
}

main();
