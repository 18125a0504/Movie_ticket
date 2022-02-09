import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-bookings',
  templateUrl: './ticket-bookings.component.html',
  styleUrls: ['./ticket-bookings.component.css']
})
export class TicketBookingsComponent implements OnInit {
  ticketForm = new FormGroup({
    persons:new FormControl('',[Validators.required]),
  });
  constructor() { }

  ngOnInit(): void {
  }
  ticketUser () {

  }
}
