var React = require('react');
var Description = require('./DescriptionRight.js');
var InputForm = require('./InputForm.js');
var UrlList = require('./UrlList.js');


module.exports = React.createClass({

	getInitialState:function(){
		var inputUrl =[];

		return{
			inputUrl:inputUrl,
		}

	},


	addUrl:function(newUrl){
		var newUrls = this.state.inputUrl;
		newUrls.push(newUrl);
		this.setState({
			inputUrl:newUrls
		})

	},

	subUrl:function(){
		$(function(){
			var d = new Date();
			var YMDHMS = d.getFullYear() + "-" +(d.getMonth()+1) + "-" + d.getDate() + "-" + d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds();
			var lastres = $('#result').val();
			
			
			$('#submitbutton').click(function(e){
				$.ajax({
					url: 'addtolist.php',
					type: 'post',
					contentType:"application/json; charset=utf-8",
					dataType: 'json',
					data: {
						'time':String(YMDHMS),
						'name':$('#name').val()
					},
					success: function(data, status){
						//	console.log(status);	
						$('#result').append(data['name'] + '<br/>');	
						document.getElementById("name").value="";

					},
					error: function(jqXHR, textStatus){
						console.log(jqXHR);
						console.log(textStatus);
					}
				});
			});

			$('#calculatebutton').click(function(e){
				var downloadlinks = "./txts/" + String(YMDHMS) + "-links.html";
				$('#thunderlinks').text("请稍候，正在生成下载地址，根据网速差异，可能会耗费几分钟的时间。。。。。");
				$.ajax({
					url: 'call-dl.php',
					type: 'post',
					timeout:360000,	
					dataType: 'json',
					data: {
						'time':String(YMDHMS)
					},

					complete: function(data,status)
					{
						window.location.href = downloadlinks;
					}
				});

			});

		});

	},
	render:function(){
		return(
			<div>
				<Description />
				<br/>
				<InputForm addUrl={this.addUrl} subUrl={this.subUrl}/>
				<br/><br/>
				<UrlList inputUrl={this.state.inputUrl} />
			</div>
			

			
			)
	}
})