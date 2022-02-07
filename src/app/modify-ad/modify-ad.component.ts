import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CampaignController } from '../controllers/campaignController';
import { Campaign } from '../models/campaign.model';

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
  campaigns : Campaign[] = []

  modifyAdForm = this.formBuilder.group({
    id:0,
    name: "",
    budget:0,
    endingDate:"",
  });



  ngOnInit(): void {
    this.campaignController.loadCampaigns().subscribe(
      (response) => {    
        this.campaigns = response;
        console.log('response received', response)
      },
      (error) => {                             
        console.error('Request failed with error', error)
      });
  }
  submit() {
    let id=this.modifyAdForm.get('id')?.value;
    let name=this.modifyAdForm.get('name')?.value;
    let budget=this.modifyAdForm.get('budget')?.value;
    let endingDate=this.modifyAdForm.get('endingDate')?.value + " 00:00";
    console.log({id})
    return this.campaignController.updateCampaign(id,name,budget,endingDate).subscribe(
      (response) => {
        console.log({response})
        this.modifyAdForm.reset()
      }
    );
  }
}
