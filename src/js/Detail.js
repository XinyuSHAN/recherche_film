import React from 'react';
import no_img from '../img/no_image.png';
class Detail extends React.Component{
	
 constructor(props, context) {
        super(props, context);
    }


 clickHandle(event){
 	if(this.props){
     var link=this.props.location.state.params.show.officialSite;
      
     const w=window.open('about:blank');
      w.location.href=link;
   
      }
  }


	render(){
	
	if(this.props){

	 const params = this.props.location.state.params;
	 const show = params.show;
	 const summary = show.summary;
	 if(params.show.image){
         var img_src = params.show.image.original
        }else{
          var img_src = no_img
        }
	 	
		return(
			<div>
				<div className="detail_intro">
				<img src={img_src} className="detail_img" />
					<div className= "detail_info">  
					<h2>Basic Information:</h2><br/>
						Name: {show.name} <br/>
						Type: {show.type} <br/>
						Language: {show.language} <br/>
						Status: {show.status} <br/>
						Premiered: {show.premiered }<br/>
						Score: {params.score}

					</div>
				</div>
				<div className ="detail_summary">
				<h2>Summary of film:</h2><br/>
				  <div className= "summary" dangerouslySetInnerHTML= {{__html:summary}} ></div>
				</div>
				<div className="detail_link">
				<h2>Source:</h2><a href={show.url} target="_blank" rel="noopener noreferrer">official site</a>
				</div>

			</div>
		);
	}else{
		return(<div>no result</div>)
	}
	

}
		
}
 
export default Detail;

