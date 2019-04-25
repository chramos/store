import React, { Component } from 'react';
import { Input, Icon, Form, Checkbox, Button, Row, Col, Card, Divider } from 'antd';
import { Link } from 'react-router-dom';

class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="page">
                <div className="container">
                    <Row type="flex" justify="center" style={{ alignItems: 'center', minHeight: 500 }}>
                        <Col lg={8} xl={8} md={12} sm={24} xs={24}>
                            <Card hoverable>
                                <h1>Entrar</h1>
                                
                                <Form onSubmit={this.handleSubmit} className="login-form">
                                    <Form.Item>
                                        {getFieldDecorator('userName', {
                                            rules: [{ required: true, message: 'Insira seu nome de usuário!' }],
                                        })(
                                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: 'Insira sua senha!' }],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        <div className="flex">
                                            {getFieldDecorator('remember', {
                                                valuePropName: 'checked',
                                                initialValue: true,
                                            })(
                                                <Checkbox className="grow">Lembrar de mim</Checkbox>
                                            )}
                                            <Link to="/">Esqueceu a senha?</Link>
                                            
                                        </div>
                                        <Button type="primary" htmlType="submit" block className="login-form-button">
                                            Log in
                                        </Button>
                                        {/* Or <a href="">register now!</a> */}
                                    </Form.Item>
                                    <Divider />
                                    <center>Ainda não tem conta? <Link to="/registrar">Registre-se!</Link></center>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            
        );
      }
}

export default Form.create({ name: 'normal_login' })(Login);