import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CampaignController } from '../controllers/campaignController';

@Component({
  selector: 'app-add-ad-campaign',
  templateUrl: './add-ad-campaign.component.html',
  styleUrls: ['./add-ad-campaign.component.css']
})
export class AddAdCampaignComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private campaignController:CampaignController) { this.campaignController=campaignController}
  private name: string = "";
  private startingDate: string = "";
  private budget: number=0.0;
  private endingDate:string="";

  addAdForm = this.formBuilder.group({
    name: this.name,
    budget:this.budget,
    startingDate:this.startingDate,
    endingDate:this.endingDate,
  });



  ngOnInit(): void {
  }

  submit() {
    var name=this.addAdForm.get('name')?.value;
    var budget=this.addAdForm.get('budget')?.value;
    var startingDate=this.addAdForm.get('startingDate')?.value;
    var endingDate=this.addAdForm.get('endingDate')?.value;
    this.campaignController.addCampaign(name,budget,startingDate,endingDate)
    window.alert(
      name + '\n' +
      "Campaign added"
    )
  }
}
