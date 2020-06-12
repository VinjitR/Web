import React from 'react';
import '../App.css';
import '../index.css';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link} from 'react-router-dom';

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
            <ul className="list-unstyled">
                                        <h4>
                                            Comments
                                        </h4><br/>
                                        {cmts}
                
                                    </ul>

        )
    }
    
  
    function RenderDish({dish})
      {
        if(dish!=null){
          return(
            <div className="col-12 m-1">
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
                <div className='container'>
                  <div className="row">
                    <Breadcrumb>
                      <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                      <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                      <h3>Menu</h3>
                      <hr />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                    <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-6">
                    <RenderComm comments={props.comments} />
                </div>
                <hr/>
                </div>
                </div>
            )
            
      };



export default Dishdetail;