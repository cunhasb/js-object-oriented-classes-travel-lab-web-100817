class Driver{
  constructor(name,startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return (year - this.startDate.getFullYear())-1;
  }
}

class Route{
  constructor(start,finish){
    this.start = start;
    this.finish = finish;
  }

  blocksTravelled(){
    const eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let hStart = this.start.horizontal;
    let hEnd = this.finish.horizontal;
    let vertical = this.finish.vertical - this.start.vertical;
    eastWest.includes(hEnd) ? hEnd= eastWest.indexOf(hEnd)+ 1 : null;
    eastWest.includes(hStart) ? hStart= eastWest.indexOf(hStart)+1 : null;
    return (this.finish.vertical - this.start.vertical) + (hEnd - hStart);
  }

  estimatedTime(peak){
    if (peak ) {
      return this.blocksTravelled()/2;}
      else{
        return this.blocksTravelled() / 3 ;}
}
}
