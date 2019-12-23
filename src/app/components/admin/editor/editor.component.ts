import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  nousForm: FormGroup;

  marieDefault= 'Originaire de la campagne brabançonne wallonne en Belgique, Marie a grandi avec l’amour de ses parents et de sa grande sœur, sa meilleure confidente.\n' +
    '        A l’âge adulte, elle s’est orientée vers des études de dentisterie et a exercé avec rigueur et motivation son métier qui allie les soins de santé et un travail minutieux voire artistique.\n' +
    '        Mais toujours en soif d’apprendre, elle ne se déplace jamais sans ses livres et se forme sans cesse dans le domaine de la santé holistique.\n' +
    '        Marie est une femme de projets, elle en a toujours plusieurs en tête et aime les mener à bien.\n' +
    '        Une citation de Christiane Singer lui va à merveille: <i>«Toute folie finit par s\'avérer raisonnable quand on la cultive assez longtemps».</i>\n' +
    '        Elle s\'investit avec générosité dans ses relations et adore les grandes discussions entre amis qui suscitent les remises en question tant chez elle que chez ses interlocuteurs.\n' +
    '        Elle a les pieds bien sur terre même quand elle nous parle des anges de l’Univers.\n' +
    '        Végétarienne de naissance, elle adore flâner dans le jardin à la recherche d\'une plante à mettre dans nos plats ou nos tisanes.';

  constructor() { }

  ngOnInit() {
    this.nousForm = new FormGroup({
      'marie'  : new FormControl(this.marieDefault),
      'cedric': new FormControl(null),
      'kids' : new FormControl(null)});
  }

}
