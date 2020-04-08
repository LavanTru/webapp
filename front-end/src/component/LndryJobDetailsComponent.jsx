import React, { Component }  from 'react';
import LndryJobDataService from '../service/LndryJobDataService'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class LndryJobDetailsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            job: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        LndryJobDataService.retrieveLndryJob(this.state.id)
            .then(response => this.setState({
                job: response.data.job
            }))
    }

    onSubmit(values) {
        let job = {
            id: this.state.id,
            job: values.job
        }

        if (this.state.id === -1) {
            LndryJobDataService.createLndryJob(job)
                .then(() => this.props.history.push())
        } else {
            LndryJobDataService.updateLndryJob(this.state.id, job)
                .then(() => this.props.history.push())
        }

        console.log(values);
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

    render() {

        let { job, id } = this.state
        return (
                <div>
                <h3>Laundry Job</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, job }}
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

export default LndryJobDetailsComponent