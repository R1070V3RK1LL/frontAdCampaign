import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CampaignController } from '../controllers/campaignController'

@Component({
  selector: 'app-add-ad-campaign',
  templateUrl: './add-ad-campaign.component.html',
  styleUrls: ['./add-ad-campaign.component.css']
})

export class AddAdCampaignComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private campaignController:CampaignController) {}
  private name: string = "";
  private budget: number=0.0;
  private endingDate:string="";

  addAdForm = this.formBuilder.group({
    name: this.name,
    budget:this.budget,
    endingDate:this.endingDate,
  });



  ngOnInit(): void {
  }
  submit() {
    var name=this.addAdForm.get('name')?.value;
    var budget=this.addAdForm.get('budget')?.value;
    const generateDatabaseDateTime = (date:Date) => {
      return date.toISOString().replace("T"," ").substring(0, 16);
    }
    var startingDate= generateDatabaseDateTime(new Date());
    console.log(startingDate)
    var endingDate=this.addAdForm.get('endingDate')?.value;
    endingDate = generateDatabaseDateTime(new Date(endingDate));
    console.log({startingDate, endingDate})
    return this.campaignController.addCampaign(name,budget,startingDate,endingDate).subscribe(
      (response) => {                           
        console.log('response received', response)
      },
      (error) => {                             
        console.error('Request failed with error', error)
      })

}
}
