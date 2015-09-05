var React = require('react');

module.exports = React.createClass({
	handleForm:function(e){
		e.preventDefault();
		if(!this.refs.urlexample.getDOMNode().value) return;

		var newUrl = this.refs.urlexample.getDOMNode().value;
		this.refs.inputUrlForm.getDOMNode().reset();
		this.props.addUrl(newUrl);


	},

	render:function(){
		return(
			<form ref="inputUrlForm" className="form-inline" onSubmit={this.handleForm} >
				<div className="form-group">
					<label htmlFor="urlInput">输入URL：</label>
					<input ref="urlexample" type="text" className="form-control" id="urlInput" placeholder="URL" />
				</div>
					<button type="submit" className="btn btn-success">添加网址</button>
					<a className="btn btn-primary" onClick={this.props.subUrl}>提交获取</a>
			</form>
		)

	}
	
})