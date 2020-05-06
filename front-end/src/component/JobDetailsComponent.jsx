import React, { Component }  from 'react';
import JobDataService from '../service/JobDataService';
import { Alert } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class JobDetailsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            job: '',
            price: 0,
            message: null,
            visible : false
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {

        if (this.state.id === -1) {
            return
        }

        JobDataService.retrieveJob(this.state.id)
            .then(response => this.setState({
                job: response.data.job,
                price: response.data.price
            }))
    }

    onSubmit(values) {
        console.log("values ",values)
        let jobJson = {
            id: this.state.id,
            job: values.job,
            price: values.price
        }

        let jobJsonWithoutId = {
            job : values.job,
            price : values.price
        }

        if (this.state.id === "-1") {
            JobDataService.createJob(jobJsonWithoutId)
                .then(() => this.props.history.push())
                .then(
                    response => {
                        this.setState({ message: `Laundry job added successfully` })
                    }
                )
        } else {
            JobDataService.updateJob(this.state.id, jobJson)
                .then(() => this.props.history.push())
                .then(
                    response => {
                        this.setState({ message: `Laundry job updated successfully` })
                    }
                )
        }

        this.onShowAlert()
    }

    validate(values) {
        let errors = {}
        if (!values.job) {
            errors.job = 'Enter a Laundry Job'
        } else if (values.job.length < 3) {
            errors.job = 'Enter atleast 3 Characters in Laundry Job'
        }
    
        return errors
    }

    onShowAlert = ()=>{
        this.setState({visible:true},()=>{
            window.setTimeout(()=>{
            this.setState({visible:false})
            },3000)
        });
    }

    render() {

        let { job, id, price } = this.state
        return (
                <div>
                <h3>Laundry Job</h3>
                {this.state.message && <Alert color="success" isOpen={this.state.visible} >{this.state.message}</Alert>}
                <div className="container">
                    <Formik
                        initialValues={{ id, job, price }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="job" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Laundry Job</label>
                                        <Field className="form-control" type="text" name="job" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Price</label>
                                        <Field className="form-control" type="number" name="price" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
    
                </div>
            </div>
        )
  }

}

export default JobDetailsComponent