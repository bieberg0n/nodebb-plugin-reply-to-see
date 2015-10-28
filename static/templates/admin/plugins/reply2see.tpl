<div class="row">
	<div class="col-lg-10">
		<div class="panel panel-default">
			<div class="panel-heading" style="font-size:20px">设置</div>
			<div class="panel-body">
				<form role="form" class="reply2see">
					<div class="form-group">
						<label for="customTag">设置隐藏代码段</label>
						<p>内容模版中符合相关内容将会被隐藏，缺省设置为<code>&lt;p class="rtos"&gt;XXXXX&lt;/p&gt;</code> 其中的XXXXX内容将会被隐藏，回复后才可见。这个不需要额外设置。</p>
						<p>如需修改为其他代码,请确保composer组件允许您输入的html tag</p>
						<input id="customTag" type="text" class="form-control" data-key="customTag">
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="col-lg-2">
		<div class="panel panel-default">
			<div class="panel-body">
				<button class="btn btn-primary" id="save">保存配置</button>
			</div>
		</div>
	</div>
</div>