import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CampaignController } from '../controllers/campaignController';

@Component({
  selector: 'app-modify-ad',
  templateUrl: './modify-ad.component.html',
  styleUrls: ['./modify-ad.component.css']
})
export class ModifyAdComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private campaignController:CampaignController) { }
  private id:number=0;
  private name: string = "";
  private budget: number=0.0;
  private endingDate:string="";

  modifyAdForm = this.formBuilder.group({
    id:this.id,
    name: this.name,
    budget:this.budget,
    endingDate:this.endingDate,
  });



  ngOnInit(): void {
  }
  submit() {

    var id=this.modifyAdForm.get('id')?.value;
    var name=this.modifyAdForm.get('name')?.value;
    var budget=this.modifyAdForm.get('budget')?.value;
    var endingDate=this.modifyAdForm.get('endingDate')?.value;
    if(!this.campaignController){
      return null;
    }
    else{
    window.alert(
      name + '\n' +
      "Campaign updated"
    )
    return this.campaignController.updateCampaign(id,name,budget,endingDate);
    }
  }
}
