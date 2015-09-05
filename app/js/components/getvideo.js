var React = require('react');
var MainState = require('./MainState.js');


module.exports = React.createClass({

	render:function(){
		return(
			<div className="body">
				<div className="navbar-default navbar-fixed-top">
					<div className="container">
						<h1>Get Youtobe Video Real Links Using <a href="http://rg3.github.io/youtube-dl">Youtube-dl</a> <small>Version 0.0.7</small></h1>
					</div>
				</div>
				<div className="main container">
					<br/>
					<MainState />
				</div>
				<div className="navbar navbar-default navbar-fixed-bottom text-center">
					<br/>
					<form className="form-inline">
						<div className="form-group">
							<label htmlFor="ucloud">Copyright © 2014-2015 | 云主机使用：</label>
							<a href="http://www.ucloud.cn?sem=oranteqcom" id="ucloud"><img src="/app/js/components/ucloudlogo.png" alt="UCloud云计算" /></a>				
						</div>
					</form>
				</div>
			</div>
			)
	}

})