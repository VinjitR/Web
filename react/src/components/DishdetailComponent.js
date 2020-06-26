import React ,{Component} from 'react';
import '../App.css';
import '../index.css';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem,Button,Label, Modal, ModalHeader,ModalBody,Row, Col } from 'reactstrap';
import { Link} from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';
import {Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComments = this.handleComments.bind(this);
    }


    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleComments(values) {

        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);    }

    render() {
        return(
            <div className='mt-auto'>
                <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span>Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comments</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => this.handleComments(values)}>
                    <Row  className="form-group">
                        <Label for="rating" md={12}>Rating</Label>
                        <Col  md={12}>
                            <Control.select model=".rating" id="rating" name="rating" className="form-control" >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="author"  md={12}>Your Name</Label>
                        <Col  md={12}>
                            <Control.text model=".author"
                              id="author" name="author" placeholder="Author" className="form-control"
                              validators={{ required, minLength: minLength(2), maxLength: maxLength(15) }} />
                            <Errors className="text-danger" model=".author" show="touched"
                              messages={{ required: 'Required',
                                 minLength: 'Must be greater than 2 characters',
                                 maxLength: 'Must be 15 charaters or less' }} />
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Label htmlFor="feedback"  md={12}>Your feedback</Label>
                        <Col  md={12}>
                            <Control.textarea model=".comment" id="comment" name="comment"
                             resize="none" rows="6" className="form-control" validators={{ required }} />
                            <Errors className="text-danger" model=".comment" show="touched" messages={{ required: 'Required' }} />
                        </Col>
                    </Row>

                    <Button type="submit" value="submit" color="primary">Submit</Button>
                </LocalForm>
            </ModalBody>
        </Modal>

            </div>
        )
    }
}


   function RenderComm({comments,postComment,dishId}){
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
                                        <CommentForm 
                                        dishId={dishId}
                                        postComment={postComment}>

                                        </CommentForm>
                
                                    </ul>

        )
    }
    
    
    function RenderDish({dish})
      {


       if(dish!=null){
          return(
            <div className="col-12 m-1">
            <Card>
            
              <CardImg width="100%" src={baseUrl +dish.image} alt={dish.name} />
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

            if (props.isLoading) {
                return(
                    <div className="container">
                        <div className="row">            
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (props.errMess) {
                return(
                    <div className="container">
                        <div className="row">            
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                );
            }
            else if(props.dish!=null)
            {
                
            

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
                    <RenderComm comments={props.comments}
                    postComment={props.postComment}
                    dishId={props.dish.id} />
                </div>
                <hr/>
                </div>
                </div>
            );
        }
            
      };



export default Dishdetail;