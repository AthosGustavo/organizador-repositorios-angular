import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit{
  input! : FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.input = this.formBuilder.group({tecnologia:['']})
  }

  pesquisarRepo():string{
    return this.input.value('tecnologia');
  }
}
