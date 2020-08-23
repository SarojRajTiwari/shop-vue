<template>
<section class="home-newsletter">
  <div class="container">
       <div class="row">
<div class="col-sm-12">
	<div class="single">
		<h2>Subscribe to our Let's Shop</h2>
	<div class="input-group">
         <input type="email" class="form-control" placeholder="Enter your email">
         <span class="input-group-btn">
         <button class="btn btn-theme" type="submit">Subscribe</button>
         </span>
          </div>
	</div>
</div>
</div>
</div>
</section>

</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-newsletter {
padding: 80px 0;
background:lightslategray;
}

.home-newsletter .single {
max-width: 650px;
margin: 0 auto;
text-align: center;
position: relative;
z-index: 2; }
.home-newsletter .single h2 {
font-size: 22px;
color: white;
text-transform: uppercase;
margin-bottom: 40px; }
.home-newsletter .single .form-control {
height: 50px;
background: rgba(255, 255, 255, 0.6);
border-color: transparent;
border-radius: 20px 0 0 20px; }
.home-newsletter .single .form-control:focus {
box-shadow: none;
border-color: #243c4f; }
.home-newsletter .single .btn {
min-height: 50px; 
border-radius: 0 20px 20px 0;
background: #243c4f;
color: #fff;
}

</style>