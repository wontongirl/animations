$( document ).ready(function() {
  //Variables
  var animationTime = 1.2;
  
  //Head Animation
  var tlHeadY = new TimelineMax({repeat:-1});
  tlHeadY.to('#head', animationTime / 4, {y:'-=10'})
  .to('#head', animationTime / 4, {y:'+=10'});
  
  var tlHeadRot = new TimelineMax({repeat:-1});
  tlHeadRot.set('#head', {transformOrigin:'100% 10%'})
  .to('#head', animationTime / 2, {rotation:'-=3'})
  .to('#head', animationTime / 2, {rotation:'+=3'});
  
  //Eyebrow Animation
  var tlEyebrows = new TimelineMax({repeat:-1});
  tlEyebrows.to('.eyebrow', animationTime / 4, {y:'-=4'})
  .to('.eyebrow', animationTime / 4, {y:'+=4'});
  
  var tlEyebrowL = new TimelineMax({repeat:-1});
  tlEyebrowL.set('#eyebrow_l', {transformOrigin:'50% 50%'})
  .to('#eyebrow_l', animationTime / 4, {rotation:'-=5'})
  .to('#eyebrow_l', animationTime / 4, {rotation:'+=5'});
  
  var tlEyebrowR = new TimelineMax({repeat:-1});
  tlEyebrowR.set('#eyebrow_r', {transformOrigin:'50% 50%'})
  .to('#eyebrow_r', animationTime / 4, {rotation:'+=5'})
  .to('#eyebrow_r', animationTime / 4, {rotation:'-=5'});
  
  //Body Animation
  var tlBodyGroup = new TimelineMax({repeat:-1});
  tlBodyGroup.to('.bodyMovement', animationTime / 4, {y:'-=15'})
  .to('.bodyMovement', animationTime / 4, {y:'+=15'});
  
  
  var tlBodyRot = new TimelineMax({repeat:-1});
  tlBodyRot.set('#body', {transformOrigin:'50% 50%'})
  .to('#body', animationTime / 2, {rotation:'-=5'})
  .to('#body', animationTime / 2, {rotation:'+=5'});
  
  //Left Arm Animation
  var tlArmLeft = new TimelineMax({repeat:-1});
  tlArmLeft.set('#arm_l', {transformOrigin:'50% 10%', rotation:5})
  .to('#arm_l', animationTime / 2, {rotation:-5})
  .to('#arm_l', animationTime / 2, {rotation:5});
  
  //Left Arm bottom Animation
  var tlArmLeftBottom = new TimelineMax({repeat:-1});
  tlArmLeftBottom.set('#arm_l_bottom', {transformOrigin:'50% 15%', rotation:15})
  .to('#arm_l_bottom', animationTime / 2, {rotation:-10})
  .to('#arm_l_bottom', animationTime / 2, {rotation:15});
  
  //Left Arm hand Animation
  var tlArmLeftHand = new TimelineMax({repeat:-1});
  tlArmLeftHand.set('#arm_l_hand', {transformOrigin:'50% 20%', rotation:0})
  .to('#arm_l_hand', animationTime / 4, {rotation:-5})
  .to('#arm_l_hand', animationTime / 4, {rotation:5})
  .to('#arm_l_hand', animationTime / 4, {rotation:-5})
  .to('#arm_l_hand', animationTime / 4, {rotation:0});
  
   //Right Arm Animation
  var tlArmRight = new TimelineMax({repeat:-1});
  tlArmRight.set('#arm_r', {transformOrigin:'50% 10%', rotation:-25})
  .to('#arm_r', animationTime / 2, {rotation:5})
  .to('#arm_r', animationTime / 2, {rotation:-25});
  
  //Right Arm bottom Animation
  var tlArmRightBottom = new TimelineMax({repeat:-1});
  tlArmRightBottom.set('#arm_r_bottom', {transformOrigin:'50% 20%', rotation:30})
  .to('#arm_r_bottom', animationTime / 4, {rotation:40})
  .to('#arm_r_bottom', animationTime / 4, {rotation:0})
  .to('#arm_r_bottom', animationTime / 2, {rotation:30});
  
  //Right Arm hand Animation
  var tlArmRightHand = new TimelineMax({repeat:-1});
  tlArmRightHand.set('#arm_r_hand', {transformOrigin:'50% 20%', rotation:0})
  .to('#arm_r_hand', animationTime / 2, {rotation:-15})
  .to('#arm_r_hand', animationTime / 2, {rotation:0});
  
  //Left Leg Animation
  var tlLegLeftRot = new TimelineMax({repeat:-1});
  tlLegLeftRot.set('#leg_l', {transformOrigin:'50% 10%', rotation:-5})
  .to('#leg_l', animationTime / 2, {rotation:5})
  .to('#leg_l', animationTime / 2, {rotation:-5});
  
  var tlLegLeftTrans = new TimelineMax({repeat:-1});
  tlLegLeftTrans.set('#leg_l', {y: 0})
  .to('#leg_l', animationTime / 4, {y: -25})
  .to('#leg_l', animationTime / 4, {y: -10})
  .to('#leg_l', animationTime / 2, {y: 0});
  
  //Left Leg Bottom Animation
  var tlLegLeftBottom = new TimelineMax({repeat:-1});
  tlLegLeftBottom.set('#leg_l_bottom', {transformOrigin:'50% 10%', rotation:-10})
  .to('#leg_l_bottom', animationTime / 2, {rotation:0})
  .to('#leg_l_bottom', animationTime / 2, {rotation:-10});
  
  //Left Leg Foot Animation
  var tlLegLeftFoot = new TimelineMax({repeat:-1});
  tlLegLeftFoot.set('#foot_l', {transformOrigin:'75% 40%', rotation:15})
  .to('#foot_l', animationTime / 8, {rotation:-2})
  .to('#foot_l', animationTime / 8, {rotation:3})
  .to('#foot_l', animationTime / 4, {rotation:-7})
  .to('#foot_l', animationTime / 2, {rotation:15});
  
  //Right Leg Animation
  var tlLegRightRot = new TimelineMax({repeat:-1});
  tlLegRightRot.set('#leg_r', {transformOrigin:'50% 10%', rotation:5})
  .to('#leg_r', animationTime / 2, {rotation:-5})
  .to('#leg_r', animationTime / 2, {rotation:5});
  
  var tlLegRightTrans = new TimelineMax({repeat:-1});
  tlLegRightTrans.set('#leg_r', {y: -10})
  .to('#leg_r', animationTime / 2, {y: 5})
  .to('#leg_r', animationTime / 4, {y: -25})
  .to('#leg_r', animationTime / 4, {y: -10});
  
  //Right Leg Bottom Animation
  var tlLegRightBottom = new TimelineMax({repeat:-1});
  tlLegRightBottom.set('#leg_r_bottom', {transformOrigin:'50% 10%', rotation:0})
  .to('#leg_r_bottom', animationTime / 2, {rotation:-10})
  .to('#leg_r_bottom', animationTime / 2, {rotation:0});
  
  //Right Leg Foot Animation
  var tlLegRightFoot = new TimelineMax({repeat:-1});
  tlLegRightFoot.set('#foot_r', {transformOrigin:'75% 40%', rotation:-7})
  .to('#foot_r', animationTime / 2, {rotation:15})
  .to('#foot_r', animationTime / 8, {rotation:-2})
  .to('#foot_r', animationTime / 8, {rotation:3})
  .to('#foot_r', animationTime / 4, {rotation:-7});
  
  //Shadow Animation
  var tlShadow = new TimelineMax({repeat:-1});
  tlShadow.set('#shadow', {transformOrigin:'50% 10%', scaleX:1.26})
  .to('#shadow', animationTime / 2, {scaleX:1})
  .to('#shadow', animationTime / 2, {scaleX:1.26});
});