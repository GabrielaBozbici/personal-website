import React, {Component} from 'react';

export default class Resume extends Component{
  constructor(){
      super();
      this.state = {
          isClicked: false
      }
  }

  handleClick(){
    let currentToggleState = this.state.isClicked;
    this.setState({
        isClicked: !currentToggleState
    });
  }

  render(){
    let moreInfo = this.state.isClicked ? "moreInfo show" : "moreInfo hide";
    let iconClass = this.state.isClicked ? 'flipped' : ' ';

    return(
      <div className="Resume">
        <div className="languages">
        <h3 className="text-center">Languages</h3>
        <ul>
          <li>Romanian<h5>Native</h5></li>
          <li>English<h5>Advanced</h5></li>
          <li>Spanish<h5>Medium</h5></li>
          <li>French<h5>Medium</h5></li>
        </ul>
      </div>
      <div className={`moreInf ${moreInfo}`}>
        <div className="experience">
           <h3>Professional experience</h3>
           <h5 className="job-title">WEB SCRAPER</h5>
           <span className="job-date">July 2016 - September 2016</span>
           <a href="http://www.rubrikkgroup.com/" className="company"><p>Rubrikk Group AS</p></a>
           <div className="main-resp">
             <p>Main resposibilities</p>
                <ul>
                   <li><p>Source Setup (setting up new sources to be indexed by Rubrikk's search engine for classified ads).</p></li>
                   <li><p>Write Regular Expressions for HTML extractions.</p></li>
                   <li><p>Monitoring crawler activity.</p></li>
                   <li><p>Attend Quality-Team's requests.</p></li>
                   <li><p>Solve bugs and reports.</p></li>
                 </ul>		      	
            </div>      
            <h5 className="job-title">PROCUREMENT ANALYST</h5> 
            <span className="job-date">July 2014 - July 2016</span>
            <a href="www.bombardier.com" className="company"><p>Bombardier Transportation</p></a>
            <div className="main-resp">
              <p>Main resposibilities</p>
              <ul>
                <li><p>Managing the demand and request process in ERP system in line with the Global Indirect
                          Procurement Processes which includes Purchase Order (PO) placement, supplier payment
                          and documentation.</p></li>
                <li><p>Managing and resolving administrative issues related to Purchase Orders.</p></li>
                <li><p>Creating monthly reports and managing the accuracy of the data.</p></li>
                <li><p>Develop working knowledge of processes and tools.</p></li>
                <li><p>First point of contact for “Business Management, “Engineering Services”, “Transportation and
                                  Logistics” commodities for France team.</p></li>
              </ul>		      	
            </div>
            <div className="studies">
              <h3>Studies</h3>
              <span>Master's degree (2012 -2014)</span>
              <div className="description-master">
                <p>Major: Banks and Capital Markets</p>
                <p>Faculty of Economics and Business Administration, Cluj-Napoca</p>
              </div>
              <span>Bachelor's degree (2009 - 2012)</span>
              <div className="description-bachelor">
                <p>Major: Finance and Banks.</p>
                <p>Faculty of Economics and Business Administration, Cluj-Napoca</p>
              </div>
              </div>
      </div>
      </div>
      <div className="arrow" onClick={this.handleClick.bind(this)}>
        <i className={`fa fa-chevron-circle-down fa-3x ${iconClass}`}></i>
      </div>
      </div>      
    )
  }
}