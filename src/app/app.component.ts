import { Component } from '@angular/core';
import { Produto } from './interfaces/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  nome: string = ''
  imagem: string = ''
  preco: number = 0
  estoque: number = 0
  descricao: string = ''

  produtos: Produto[] = []
    
  adicionarProduto(evento: any): void{
  
    this.produtos.push({
      descricao: this.descricao,
      estoque: this.estoque,
      imagem: this.imagem,
      nome: this.nome,
      preco: this.preco
    })

    evento.preventDefault()
    evento.stopPropagation()

    this.nome = "",
    this.preco = 0,
    this.estoque = 0,
    this.imagem = "",
    this.descricao = ""
  }

  }

