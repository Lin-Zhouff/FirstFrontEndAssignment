import { Component, OnInit, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  // tslint:disable-next-line:indent
	title = 'hellowWorld';
  // tslint:disable-next-line:indent
	time = new Date();
  hours = new Date().getHours();
  minutes = new Date().getMinutes();
  seconds = new Date().getSeconds();
  meridiem = '';
  show = false;
  // tslint:disable-next-line:indent
	timer;

  // tslint:disable-next-line:typedef
  changeNumber(event){
    if (this.timer != null){
      clearInterval(this.timer);
      this.show = true;
    }
  }

  update(): void {
    this.time = new Date();
    this.seconds = this.seconds + 1;

    if (this.seconds > 59){
      this.seconds = this.seconds - 60;
      this.minutes = this.minutes + 1;
    }

    if (this.minutes > 59){
      this.minutes = this.minutes - 60;
      this.hours = this.hours + 1;
    }

    if (this.hours > 12){
      this.hours = this.hours - 12;
    }
    else if (this.hours === 0){
      this.hours = 12;
    }
  }

  // tslint:disable-next-line:typedef
  enter(){
    this.show = false;
    this.timer = setInterval(() => {
      this.update();
    }, 1000);
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.meridiem = this.hours >= 12 ? 'PM' : 'AM';
    if (this.hours > 12){
      this.hours = this.hours - 12;
    }
    else if (this.hours === 0){
      this.hours = 12;
    }
    this.timer = setInterval(() => {
      this.update();
    }, 1000);
  }
  // tslint:disable-next-line:typedef
  ngOnDestroy(){
    clearInterval(this.timer);
  }
}

