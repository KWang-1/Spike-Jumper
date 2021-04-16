gdjs.Game_32sceneCode = {};
gdjs.Game_32sceneCode.GDPlayerObjects1= [];
gdjs.Game_32sceneCode.GDPlayerObjects2= [];
gdjs.Game_32sceneCode.GDPlayerObjects3= [];
gdjs.Game_32sceneCode.GDSpikeBaseObjects1= [];
gdjs.Game_32sceneCode.GDSpikeBaseObjects2= [];
gdjs.Game_32sceneCode.GDSpikeBaseObjects3= [];
gdjs.Game_32sceneCode.GDBrickObjects1= [];
gdjs.Game_32sceneCode.GDBrickObjects2= [];
gdjs.Game_32sceneCode.GDBrickObjects3= [];
gdjs.Game_32sceneCode.GDSpikesObjects1= [];
gdjs.Game_32sceneCode.GDSpikesObjects2= [];
gdjs.Game_32sceneCode.GDSpikesObjects3= [];
gdjs.Game_32sceneCode.GDFallingBlockObjects1= [];
gdjs.Game_32sceneCode.GDFallingBlockObjects2= [];
gdjs.Game_32sceneCode.GDFallingBlockObjects3= [];
gdjs.Game_32sceneCode.GDPlatformObjects1= [];
gdjs.Game_32sceneCode.GDPlatformObjects2= [];
gdjs.Game_32sceneCode.GDPlatformObjects3= [];
gdjs.Game_32sceneCode.GDBackground0Objects1= [];
gdjs.Game_32sceneCode.GDBackground0Objects2= [];
gdjs.Game_32sceneCode.GDBackground0Objects3= [];
gdjs.Game_32sceneCode.GDFlatObjects1= [];
gdjs.Game_32sceneCode.GDFlatObjects2= [];
gdjs.Game_32sceneCode.GDFlatObjects3= [];
gdjs.Game_32sceneCode.GDLargeBlockObjects1= [];
gdjs.Game_32sceneCode.GDLargeBlockObjects2= [];
gdjs.Game_32sceneCode.GDLargeBlockObjects3= [];
gdjs.Game_32sceneCode.GDTallBlockObjects1= [];
gdjs.Game_32sceneCode.GDTallBlockObjects2= [];
gdjs.Game_32sceneCode.GDTallBlockObjects3= [];
gdjs.Game_32sceneCode.GDBreakableBlocksObjects1= [];
gdjs.Game_32sceneCode.GDBreakableBlocksObjects2= [];
gdjs.Game_32sceneCode.GDBreakableBlocksObjects3= [];
gdjs.Game_32sceneCode.GDMessageTextObjects1= [];
gdjs.Game_32sceneCode.GDMessageTextObjects2= [];
gdjs.Game_32sceneCode.GDMessageTextObjects3= [];
gdjs.Game_32sceneCode.GDScoreObjects1= [];
gdjs.Game_32sceneCode.GDScoreObjects2= [];
gdjs.Game_32sceneCode.GDScoreObjects3= [];
gdjs.Game_32sceneCode.GDDeathDisabledObjects1= [];
gdjs.Game_32sceneCode.GDDeathDisabledObjects2= [];
gdjs.Game_32sceneCode.GDDeathDisabledObjects3= [];
gdjs.Game_32sceneCode.GDStatisticsObjects1= [];
gdjs.Game_32sceneCode.GDStatisticsObjects2= [];
gdjs.Game_32sceneCode.GDStatisticsObjects3= [];
gdjs.Game_32sceneCode.GDSoundDisabledObjects1= [];
gdjs.Game_32sceneCode.GDSoundDisabledObjects2= [];
gdjs.Game_32sceneCode.GDSoundDisabledObjects3= [];

gdjs.Game_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Game_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.Game_32sceneCode.condition4IsTrue_0 = {val:false};
gdjs.Game_32sceneCode.conditionTrue_1 = {val:false};
gdjs.Game_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.Game_32sceneCode.condition3IsTrue_1 = {val:false};
gdjs.Game_32sceneCode.condition4IsTrue_1 = {val:false};


gdjs.Game_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.Game_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3));
}}
if (gdjs.Game_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDPlayerObjects1 */
{runtimeScene.getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{runtimeScene.getVariables().getFromIndex(5).add(1);
}}

}


};gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDBackground0Objects1Objects = Hashtable.newFrom({"Background0": gdjs.Game_32sceneCode.GDBackground0Objects1});gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDBrickObjects2Objects = Hashtable.newFrom({"Brick": gdjs.Game_32sceneCode.GDBrickObjects2});gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.Game_32sceneCode.GDPlatformObjects2});gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDLargeBlockObjects2Objects = Hashtable.newFrom({"LargeBlock": gdjs.Game_32sceneCode.GDLargeBlockObjects2});gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDFlatObjects2Objects = Hashtable.newFrom({"Flat": gdjs.Game_32sceneCode.GDFlatObjects2});gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDTallBlockObjects1Objects = Hashtable.newFrom({"TallBlock": gdjs.Game_32sceneCode.GDTallBlockObjects1});gdjs.Game_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.Game_32sceneCode.GDBrickObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDBrickObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), "");
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.Game_32sceneCode.GDPlatformObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDPlatformObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), "");
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.Game_32sceneCode.GDLargeBlockObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDLargeBlockObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), "");
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.Game_32sceneCode.GDFlatObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDFlatObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), "");
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.Game_32sceneCode.GDTallBlockObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDTallBlockObjects1Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), "");
}}

}


};gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDFallingBlockObjects1Objects = Hashtable.newFrom({"FallingBlock": gdjs.Game_32sceneCode.GDFallingBlockObjects1});gdjs.Game_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDPlayerObjects1[i].setAnimationName("Jump");
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(Math.round((gdjs.evtTools.window.getWindowInnerHeight() - (( gdjs.Game_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDPlayerObjects1[0].getPointY(""))) / 100));
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}
{ //Subevents
gdjs.Game_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition1IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition2IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition3IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Game_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Game_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlayerObjects1.length = k;}if ( gdjs.Game_32sceneCode.condition1IsTrue_0.val ) {
{
gdjs.Game_32sceneCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) > 0;
}if ( gdjs.Game_32sceneCode.condition2IsTrue_0.val ) {
{
gdjs.Game_32sceneCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
}
}
if (gdjs.Game_32sceneCode.condition3IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "187024__lloydevans09__jump2.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(5).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlayerObjects1.length = k;}if ( gdjs.Game_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.Game_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.Game_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDPlayerObjects1[i].setAnimationName("Run");
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getVariables().get("prevJumpCount").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlayerObjects1.length = k;}if ( gdjs.Game_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Game_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.Game_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getVariables().get("prevJumpCount").setNumber(0);
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= (( gdjs.Game_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDPlayerObjects1[0].getPointY("")) - 600;
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.Game_32sceneCode.GDBackground0Objects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).sub(32);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(0, 4));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDBackground0Objects1Objects, 0, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), "");
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDBackground0Objects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDBackground0Objects1[i].setZOrder(0);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)));
}
{ //Subevents
gdjs.Game_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Brick"), gdjs.Game_32sceneCode.GDBrickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Game_32sceneCode.GDSpikesObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDBrickObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDBrickObjects1[i].getY() >= (( gdjs.Game_32sceneCode.GDSpikesObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDSpikesObjects1[0].getY()) - 16 ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDBrickObjects1[k] = gdjs.Game_32sceneCode.GDBrickObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDBrickObjects1.length = k;}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDBrickObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDBrickObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDBrickObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.Game_32sceneCode.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Game_32sceneCode.GDSpikesObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDPlatformObjects1[i].getY() >= (( gdjs.Game_32sceneCode.GDSpikesObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDSpikesObjects1[0].getY()) - 16 ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlatformObjects1[k] = gdjs.Game_32sceneCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlatformObjects1.length = k;}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDPlatformObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDPlatformObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flat"), gdjs.Game_32sceneCode.GDFlatObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Game_32sceneCode.GDSpikesObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDFlatObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDFlatObjects1[i].getY() >= (( gdjs.Game_32sceneCode.GDSpikesObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDSpikesObjects1[0].getY()) - 16 ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDFlatObjects1[k] = gdjs.Game_32sceneCode.GDFlatObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDFlatObjects1.length = k;}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDFlatObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDFlatObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDFlatObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Game_32sceneCode.GDSpikesObjects1);
gdjs.copyArray(runtimeScene.getObjects("TallBlock"), gdjs.Game_32sceneCode.GDTallBlockObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDTallBlockObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDTallBlockObjects1[i].getY() >= (( gdjs.Game_32sceneCode.GDSpikesObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDSpikesObjects1[0].getY()) - 16 ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDTallBlockObjects1[k] = gdjs.Game_32sceneCode.GDTallBlockObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDTallBlockObjects1.length = k;}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDTallBlockObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDTallBlockObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDTallBlockObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LargeBlock"), gdjs.Game_32sceneCode.GDLargeBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Game_32sceneCode.GDSpikesObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDLargeBlockObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDLargeBlockObjects1[i].getY() >= (( gdjs.Game_32sceneCode.GDSpikesObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDSpikesObjects1[0].getY()) - 16 ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDLargeBlockObjects1[k] = gdjs.Game_32sceneCode.GDLargeBlockObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDLargeBlockObjects1.length = k;}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDLargeBlockObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDLargeBlockObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDLargeBlockObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Background0"), gdjs.Game_32sceneCode.GDBackground0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Game_32sceneCode.GDSpikesObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDBackground0Objects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDBackground0Objects1[i].getY() >= (( gdjs.Game_32sceneCode.GDSpikesObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDSpikesObjects1[0].getY()) + 64 ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDBackground0Objects1[k] = gdjs.Game_32sceneCode.GDBackground0Objects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDBackground0Objects1.length = k;}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDBackground0Objects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDBackground0Objects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDBackground0Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Brick"), gdjs.Game_32sceneCode.GDBrickObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDBrickObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDBrickObjects1[i].getWidth() == 1 ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDBrickObjects1[k] = gdjs.Game_32sceneCode.GDBrickObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDBrickObjects1.length = k;}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDBrickObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDBrickObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDBrickObjects1[i].setWidth(gdjs.randomInRange(4, 16) * 16);
}
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDBrickObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDBrickObjects1[i].setHeight(gdjs.randomInRange(1, 3) * 16);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("FallingBlock"), gdjs.Game_32sceneCode.GDFallingBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Game_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDPlayerObjects1[0].getPointY("")), "", 0);
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDFallingBlockObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDFallingBlockObjects1[i].addForce(gdjs.randomFloatInRange(-(5), 5), gdjs.randomFloatInRange(0.1, 0.5), 1);
}
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MessageText"), gdjs.Game_32sceneCode.GDMessageTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpikeBase"), gdjs.Game_32sceneCode.GDSpikeBaseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Game_32sceneCode.GDSpikesObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs.Game_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDPlayerObjects1[0].getPointY("")));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageTimer");
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDMessageTextObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDMessageTextObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTimer");
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDSpikeBaseObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDSpikeBaseObjects1[i].addForce(0, -(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))), 1);
}
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDSpikesObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDSpikesObjects1[i].addForce(0, -(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))), 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Game_32sceneCode.GDSpikesObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDPlayerObjects1[i].getY() >= (( gdjs.Game_32sceneCode.GDSpikesObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDSpikesObjects1[0].getY()) - 16 ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlayerObjects1.length = k;}if ( gdjs.Game_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.Game_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End scene", true);
}{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.4, "FallingBlockTimer");
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.Game_32sceneCode.GDFallingBlockObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32sceneCode.mapOfGDgdjs_46Game_9532sceneCode_46GDFallingBlockObjects1Objects, gdjs.randomInRange(0, gdjs.evtTools.window.getWindowInnerWidth()), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) - 64, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FallingBlockTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FallingBlock"), gdjs.Game_32sceneCode.GDFallingBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Game_32sceneCode.GDSpikesObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDFallingBlockObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDFallingBlockObjects1[i].getY() >= (( gdjs.Game_32sceneCode.GDSpikesObjects1.length === 0 ) ? 0 :gdjs.Game_32sceneCode.GDSpikesObjects1[0].getY()) ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDFallingBlockObjects1[k] = gdjs.Game_32sceneCode.GDFallingBlockObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDFallingBlockObjects1.length = k;}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32sceneCode.GDFallingBlockObjects1 */
{for(var i = 0, len = gdjs.Game_32sceneCode.GDFallingBlockObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDFallingBlockObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 15, "StageTimer");
}if ( gdjs.Game_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) < 3;
}}
if (gdjs.Game_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MessageText"), gdjs.Game_32sceneCode.GDMessageTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpikeBase"), gdjs.Game_32sceneCode.GDSpikeBaseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Game_32sceneCode.GDSpikesObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageTimer");
}{runtimeScene.getVariables().getFromIndex(3).add(1);
}{runtimeScene.getVariables().getFromIndex(4).add(25);
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDSpikesObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDSpikesObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDSpikeBaseObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDSpikeBaseObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDSpikesObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDSpikesObjects1[i].addForce(0, -(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))), 1);
}
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDSpikeBaseObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDSpikeBaseObjects1[i].addForce(0, -(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))), 1);
}
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDMessageTextObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDMessageTextObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MessageTimer");
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "MessageTimer");
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MessageText"), gdjs.Game_32sceneCode.GDMessageTextObjects1);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDMessageTextObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDMessageTextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32sceneCode.GDPlayerObjects1);

gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Game_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Game_32sceneCode.GDPlayerObjects1[k] = gdjs.Game_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32sceneCode.GDPlayerObjects1.length = k;}if ( gdjs.Game_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32sceneCode.conditionTrue_1 = gdjs.Game_32sceneCode.condition1IsTrue_0;
gdjs.Game_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8573284);
}
}}
if (gdjs.Game_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).add(1);
}{runtimeScene.getVariables().getFromIndex(6).add(1);
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
}if ( gdjs.Game_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32sceneCode.conditionTrue_1 = gdjs.Game_32sceneCode.condition1IsTrue_0;
gdjs.Game_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8574356);
}
}}
if (gdjs.Game_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1 - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if ( gdjs.Game_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32sceneCode.conditionTrue_1 = gdjs.Game_32sceneCode.condition1IsTrue_0;
gdjs.Game_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8575212);
}
}}
if (gdjs.Game_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1 - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Game_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "o");
}if ( gdjs.Game_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32sceneCode.conditionTrue_1 = gdjs.Game_32sceneCode.condition1IsTrue_0;
gdjs.Game_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8576068);
}
}}
if (gdjs.Game_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1 - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DeathDisabled"), gdjs.Game_32sceneCode.GDDeathDisabledObjects1);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDDeathDisabledObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDDeathDisabledObjects1[i].hide();
}
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DeathDisabled"), gdjs.Game_32sceneCode.GDDeathDisabledObjects1);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDDeathDisabledObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDDeathDisabledObjects1[i].hide(false);
}
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Statistics"), gdjs.Game_32sceneCode.GDStatisticsObjects1);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDStatisticsObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDStatisticsObjects1[i].hide();
}
}}

}


{


gdjs.Game_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.Game_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Statistics"), gdjs.Game_32sceneCode.GDStatisticsObjects1);
{for(var i = 0, len = gdjs.Game_32sceneCode.GDStatisticsObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDStatisticsObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32sceneCode.GDStatisticsObjects1.length ;i < len;++i) {
    gdjs.Game_32sceneCode.GDStatisticsObjects1[i].setString("Times Jumped = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6))) + "\nTimes died = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5))));
}
}}

}


};

gdjs.Game_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32sceneCode.GDSpikeBaseObjects1.length = 0;
gdjs.Game_32sceneCode.GDSpikeBaseObjects2.length = 0;
gdjs.Game_32sceneCode.GDSpikeBaseObjects3.length = 0;
gdjs.Game_32sceneCode.GDBrickObjects1.length = 0;
gdjs.Game_32sceneCode.GDBrickObjects2.length = 0;
gdjs.Game_32sceneCode.GDBrickObjects3.length = 0;
gdjs.Game_32sceneCode.GDSpikesObjects1.length = 0;
gdjs.Game_32sceneCode.GDSpikesObjects2.length = 0;
gdjs.Game_32sceneCode.GDSpikesObjects3.length = 0;
gdjs.Game_32sceneCode.GDFallingBlockObjects1.length = 0;
gdjs.Game_32sceneCode.GDFallingBlockObjects2.length = 0;
gdjs.Game_32sceneCode.GDFallingBlockObjects3.length = 0;
gdjs.Game_32sceneCode.GDPlatformObjects1.length = 0;
gdjs.Game_32sceneCode.GDPlatformObjects2.length = 0;
gdjs.Game_32sceneCode.GDPlatformObjects3.length = 0;
gdjs.Game_32sceneCode.GDBackground0Objects1.length = 0;
gdjs.Game_32sceneCode.GDBackground0Objects2.length = 0;
gdjs.Game_32sceneCode.GDBackground0Objects3.length = 0;
gdjs.Game_32sceneCode.GDFlatObjects1.length = 0;
gdjs.Game_32sceneCode.GDFlatObjects2.length = 0;
gdjs.Game_32sceneCode.GDFlatObjects3.length = 0;
gdjs.Game_32sceneCode.GDLargeBlockObjects1.length = 0;
gdjs.Game_32sceneCode.GDLargeBlockObjects2.length = 0;
gdjs.Game_32sceneCode.GDLargeBlockObjects3.length = 0;
gdjs.Game_32sceneCode.GDTallBlockObjects1.length = 0;
gdjs.Game_32sceneCode.GDTallBlockObjects2.length = 0;
gdjs.Game_32sceneCode.GDTallBlockObjects3.length = 0;
gdjs.Game_32sceneCode.GDBreakableBlocksObjects1.length = 0;
gdjs.Game_32sceneCode.GDBreakableBlocksObjects2.length = 0;
gdjs.Game_32sceneCode.GDBreakableBlocksObjects3.length = 0;
gdjs.Game_32sceneCode.GDMessageTextObjects1.length = 0;
gdjs.Game_32sceneCode.GDMessageTextObjects2.length = 0;
gdjs.Game_32sceneCode.GDMessageTextObjects3.length = 0;
gdjs.Game_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Game_32sceneCode.GDScoreObjects2.length = 0;
gdjs.Game_32sceneCode.GDScoreObjects3.length = 0;
gdjs.Game_32sceneCode.GDDeathDisabledObjects1.length = 0;
gdjs.Game_32sceneCode.GDDeathDisabledObjects2.length = 0;
gdjs.Game_32sceneCode.GDDeathDisabledObjects3.length = 0;
gdjs.Game_32sceneCode.GDStatisticsObjects1.length = 0;
gdjs.Game_32sceneCode.GDStatisticsObjects2.length = 0;
gdjs.Game_32sceneCode.GDStatisticsObjects3.length = 0;
gdjs.Game_32sceneCode.GDSoundDisabledObjects1.length = 0;
gdjs.Game_32sceneCode.GDSoundDisabledObjects2.length = 0;
gdjs.Game_32sceneCode.GDSoundDisabledObjects3.length = 0;

gdjs.Game_32sceneCode.eventsList2(runtimeScene);
return;

}

gdjs['Game_32sceneCode'] = gdjs.Game_32sceneCode;
