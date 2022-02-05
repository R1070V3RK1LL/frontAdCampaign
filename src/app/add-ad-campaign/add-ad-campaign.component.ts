import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-ad-campaign',
  templateUrl: './add-ad-campaign.component.html',
  styleUrls: ['./add-ad-campaign.component.css']
})
export class AddAdCampaignComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  private name: string = "";
  private description: string = "";
  private budget: number=0.0;
  private ending_date:Date=new Date(0);

  addAdForm = this.formBuilder.group({
    name: this.name,
    budget:this.budget,
    description:this.description,
    ending_date:this.ending_date,
  });



  ngOnInit(): void {
  }

  submit() {
    window.alert(
      this.addAdForm.get('name')?.value + '\n' +
      "Campaign added"
    )
  }
}
