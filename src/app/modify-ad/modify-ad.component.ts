import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-modify-ad',
  templateUrl: './modify-ad.component.html',
  styleUrls: ['./modify-ad.component.css']
})
export class ModifyAdComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  private name: string = "";
  private description: string = "";
  private budget: number=0.0;
  private ending_date:Date=new Date(0);

  modifyAdForm = this.formBuilder.group({
    name: this.name,
    budget:this.budget,
    description:this.description,
    ending_date:this.ending_date,
  });



  ngOnInit(): void {
  }

  submit() {
    window.alert(
      this.modifyAdForm.get('name')?.value + '\n' +
      "Campaign updated"
    )
  }
}
