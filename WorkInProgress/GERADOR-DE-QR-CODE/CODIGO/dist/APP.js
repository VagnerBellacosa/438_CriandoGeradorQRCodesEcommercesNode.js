"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const QRCode = require("qrcode");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gerarQRCode(texto, nomeArquivo) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield QRCode.toFile(nomeArquivo, texto);
            console.log(`QR Code gerado com sucesso!`);
            console.log(`O arquivo "${nomeArquivo}" foi criado.`);
        }
        catch (error) {
            console.error('Erro ao gerar o QR Code:', error);
        }
    });
}

function obterTextoDoUsuario() {
    return new Promise((resolve, reject) => {
        rl.question('😎Digite o texto para gerar o QR Code: \n>>>', (texto) => {
            if (texto.trim() === '') {
                console.error('😡Erro: O texto não pode estar vazio!');
                reject();
            }
            else {
                resolve(texto);
            }
            rl.close();
        });
    });
}

function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const textoParaQRCode = yield obterTextoDoUsuario();
            const nomeArquivo = 'qr_code.png';
            yield gerarQRCode(textoParaQRCode, nomeArquivo);
        }
        catch (error) {
            console.error('Erro ao gerar o QR Code:', error);
        }
    });
}

main();
