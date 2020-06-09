import React from 'react';
import '../App.css';
import '../index.css';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';


   function RenderComm({comments}){
        if(comments==null)
        {
            return(<div className='col auto'></div>)
        }
        const cmts=comments.map(comment=>{
            return(
                <li key={comment.id}>
                    <CardText>{comment.comment}</CardText>
                    <CardText>--{comment.author}
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </CardText>


                </li>
            )
        })
        return(
            <div className='col-12 col-md-5 m-5 '>
            <ul className="list-unstyled">
                                        <h4>
                                            Comments
                                        </h4><br/>
                                        {cmts}
                
                                    </ul>
            </div>

        )
    }
    
  
    function RenderDish({dish})
      {
        if(dish!=null){
          return(
            <div className="col-12 col-md-5 m-5">
            <Card>
            
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                  </CardBody>           
            </Card>
            </div>
            
          )
  
        }
        else{
          return(<div className='col auto'></div>);
        }
      }

   const Dishdetail =(props)=> {
            const dish=props.dish

            if(dish==null)
            {
                return(<div></div>)
            }

            return(
                <div className='row ml-7'>
                    <RenderDish dish={props.dish}/>
                    <RenderComm comments={props.dish.comments}/>
                </div>
            )
            
      };



export default Dishdetail;