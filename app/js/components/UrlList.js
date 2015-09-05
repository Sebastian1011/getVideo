var React = require('react');

module.exports = React.createClass({
	render:function(){
		var inputUrl= this.props.inputUrl;
		if( !Array.isArray(inputUrl) ) throw new Error('this.props.inputUrl必须是数组');
		var inputUrlList = inputUrl.map(function(item){
			return (
				<li>
					{item}
				</li>
				)

		}.bind(this));

		return(
			<div>
				<label htmlFor="urllist">已经添加的网址：</label>
				<div id="urllist">
					{inputUrlList}
				</div>
			</div>
			)
	}
})