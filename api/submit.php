<?php
class db{
    var $host="localhost";
	var $user="root";
	var $pass="mysql";
    var $db="naya";
    public function connect()
	{
	    $con = mysqli_connect($this->host,$this->user,$this->pass,$this->db); 
	    return $con;
	}
}
?>

<?php
//   require_once('db.php');
$columns = '';
  $dash_query = new db();
  if(isset($_POST['register'])){
      foreach($_POST as $posts=>$key){
          if(isset($_POST["$posts"]) && !empty($_POST["$posts"]) && $_POST["$posts"] !== "Register"){
            $columns .= "`$posts`".', ';
            $values .= '"'.$_POST["$posts"].'", ';
        }
    }
    if(isset($_FILES['upload']) && !empty($_FILES['upload'])){
        $attachment_name = $_FILES['upload']['name'];
        $columns.='`upload`'; $values.="'$attachment_name'";
        // if(move_uploaded_file($_FILES['fileUpload']['tmp_name'],"$upload_name")){
        //     $success = true;
        // }
    }

    $conn = $dash_query->connect();
        if(mysqli_query($conn,"insert into `tbl_onboarding`  ($columns) values($values)")){
        
        }else{
            echo "insert into `tbl_onboarding`  ($columns) values($values)";
        }
     
  }
//all codes written by ahamisi Godsfavour for Naya's Onboarding Project

?>
