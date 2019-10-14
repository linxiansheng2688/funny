
 <?php
 //处理跨域
 function postcurl($url,$data = null){		
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
    if (!empty($data)){
        curl_setopt($ch, CURLOPT_POST, TRUE);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    }
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$output = curl_exec($ch);
	curl_close($ch);
	$output=json_decode($output,true);
		
	var_dump( $output);

	$jsonp_supporter = $_GET['callback'];
	$p_name=$_GET['type'];
	$result=array('err'=>0,'data'=>$output);

}

postcurl("http://baobab.kaiyanapp.com/api/v5/index/tab/allRec",$data = null); //$url:请求的接口地址。$data:请求接口时所带的参数



 ?>