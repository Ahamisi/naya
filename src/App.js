import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
	  
    <div className="App">
      <div class="container1">
        <div class="overlay">
          <div class="bird-container bird-container--one">
            <div class="bird bird--one"></div>
          </div>
          <div class="bird-container bird-container--two">
            <div class="bird bird--two"></div>
          </div>
          <div class="bird-container bird-container--three">
            <div class="bird bird--three"></div>
          </div>
          <div class="bird-container bird-container--four">
            <div class="bird bird--four"></div>
          </div>
        <div class="row" id="logg">
            <div class="col col-lg-8 col-md-6 col-sm-4 col-xs-4 pad-none">
                    <div class="bg-image pad-double"></div>
                <div class="container3 pad-none">
                    <p class="line anim-typewriter">NAYA STUDIO</p>
                </div>
                
            </div>
          </div>
      </div>
    </div>
    <div class="container">
          <form class="" method="post" action="submit.php" enctype="multipart/form-data">
          <span class="form-contain signUp">
            <h3>Create Your Account</h3>
            <p>True Personalization at its peak</p>
            <input class="w100" name="email" type="email" placeholder="enter email" reqired autocomplete='off' />
            <input type="password" name="password" class="w100" placeholder="enter Password" required />
            <select name="user_type" class="w100 user_type">
              <option value="">What do you want to register as</option>
              <option value="designer">Designer</option>
              <option value="maker">Maker</option>
              <option value="both">Both</option>
            </select>            
            <button class="form-btn dx log-in full-width w100" type="button">Next</button>
          </span>
        <span class="form-contain signIn">
			    <div id="space"></div>
          <div id="type-1">
            <label for="points" class="one-color"><span> How many projects on average do you work on every month?</span><span class="span-1">0</span> <span class="span-2">10</span></label>
            <input name="capacity_maker" min="0" max="10" type="range"/>
            <select name="material" class="w100 user_type">
              <option value="">What kind of materials do you work with</option>
              <option value="wood">Wood</option>
              <option value="metal">Metal</option>
              <option value="glass">Glass</option>
              <option value="plastic">Plastic</option>
              <option value="concrete">Concrete</option>
              <option value="other">Other</option>
            </select> 
            <input type="text" name="location" placeholder="where are you based out of"/>
		      </div>
		      <div id="type-2">
            <input type="number" name="capacity_designer" placeholder="how much can you spend on Naya per week"/>
            <select name="type_of_designer" class=" user_type">
              <option value="">Which of the following describes you</option>
              <option value="Furniture Designer">Furniture Designer</option>
              <option value="Architect">Architect</option>
              <option value="Interior Designer">Interior Designer</option>
              <option value="Industrial Designer">Industrial Designer</option>
              <option value="Designer Maker">Designer Maker</option>
              <option value="other">Other</option>
            </select>
            <input type="text" name="training" placeholder="education level / type"/>
		      </div>
		          <input type="file" name="upload"/>
              <button class="form-btn sx go-back" type="button">Back</button>
              <button class="form-btn dx" type="submit" name="register" value="Register">Register</button>
        </span>
      </form>
    </div>
    </div>
  );
}

export default App;
