gdjs.Start_32sceneCode = {};
gdjs.Start_32sceneCode.GDGameTitleObjects1= [];
gdjs.Start_32sceneCode.GDGameTitleObjects2= [];
gdjs.Start_32sceneCode.GDGameTitleObjects3= [];
gdjs.Start_32sceneCode.GDStartButtonObjects1= [];
gdjs.Start_32sceneCode.GDStartButtonObjects2= [];
gdjs.Start_32sceneCode.GDStartButtonObjects3= [];
gdjs.Start_32sceneCode.GDInstructionsObjects1= [];
gdjs.Start_32sceneCode.GDInstructionsObjects2= [];
gdjs.Start_32sceneCode.GDInstructionsObjects3= [];
gdjs.Start_32sceneCode.GDHintsObjects1= [];
gdjs.Start_32sceneCode.GDHintsObjects2= [];
gdjs.Start_32sceneCode.GDHintsObjects3= [];
gdjs.Start_32sceneCode.GDBackgroundObjects1= [];
gdjs.Start_32sceneCode.GDBackgroundObjects2= [];
gdjs.Start_32sceneCode.GDBackgroundObjects3= [];
gdjs.Start_32sceneCode.GDTallBlockObjects1= [];
gdjs.Start_32sceneCode.GDTallBlockObjects2= [];
gdjs.Start_32sceneCode.GDTallBlockObjects3= [];
gdjs.Start_32sceneCode.GDFlatObjects1= [];
gdjs.Start_32sceneCode.GDFlatObjects2= [];
gdjs.Start_32sceneCode.GDFlatObjects3= [];
gdjs.Start_32sceneCode.GDBrickObjects1= [];
gdjs.Start_32sceneCode.GDBrickObjects2= [];
gdjs.Start_32sceneCode.GDBrickObjects3= [];
gdjs.Start_32sceneCode.GDPlatformObjects1= [];
gdjs.Start_32sceneCode.GDPlatformObjects2= [];
gdjs.Start_32sceneCode.GDPlatformObjects3= [];
gdjs.Start_32sceneCode.GDLargeBlockObjects1= [];
gdjs.Start_32sceneCode.GDLargeBlockObjects2= [];
gdjs.Start_32sceneCode.GDLargeBlockObjects3= [];

gdjs.Start_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Start_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Start_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.Start_32sceneCode.conditionTrue_1 = {val:false};
gdjs.Start_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.Start_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.Start_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Start_32sceneCode.GDStartButtonObjects1});gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Start_32sceneCode.GDStartButtonObjects1});gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Start_32sceneCode.GDStartButtonObjects1});gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDBrickObjects2Objects = Hashtable.newFrom({"Brick": gdjs.Start_32sceneCode.GDBrickObjects2});gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.Start_32sceneCode.GDPlatformObjects2});gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDLargeBlockObjects2Objects = Hashtable.newFrom({"LargeBlock": gdjs.Start_32sceneCode.GDLargeBlockObjects2});gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDFlatObjects2Objects = Hashtable.newFrom({"Flat": gdjs.Start_32sceneCode.GDFlatObjects2});gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDTallBlockObjects1Objects = Hashtable.newFrom({"TallBlock": gdjs.Start_32sceneCode.GDTallBlockObjects1});gdjs.Start_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
gdjs.Start_32sceneCode.GDBrickObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDBrickObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), -(16), "");
}{for(var i = 0, len = gdjs.Start_32sceneCode.GDBrickObjects2.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDBrickObjects2[i].addForce(0, 15, 1);
}
}{for(var i = 0, len = gdjs.Start_32sceneCode.GDBrickObjects2.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDBrickObjects2[i].setZOrder(1);
}
}}

}


{


gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
gdjs.Start_32sceneCode.GDPlatformObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDPlatformObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), -(16), "");
}{for(var i = 0, len = gdjs.Start_32sceneCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDPlatformObjects2[i].addForce(0, 15, 1);
}
}{for(var i = 0, len = gdjs.Start_32sceneCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDPlatformObjects2[i].setZOrder(1);
}
}}

}


{


gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
gdjs.Start_32sceneCode.GDLargeBlockObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDLargeBlockObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), -(16), "");
}{for(var i = 0, len = gdjs.Start_32sceneCode.GDLargeBlockObjects2.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDLargeBlockObjects2[i].addForce(0, 15, 1);
}
}{for(var i = 0, len = gdjs.Start_32sceneCode.GDLargeBlockObjects2.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDLargeBlockObjects2[i].setZOrder(1);
}
}}

}


{


gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
gdjs.Start_32sceneCode.GDFlatObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDFlatObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), -(16), "");
}{for(var i = 0, len = gdjs.Start_32sceneCode.GDFlatObjects2.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDFlatObjects2[i].addForce(0, 15, 1);
}
}{for(var i = 0, len = gdjs.Start_32sceneCode.GDFlatObjects2.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDFlatObjects2[i].setZOrder(1);
}
}}

}


{


gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Brick"), gdjs.Start_32sceneCode.GDBrickObjects1);
gdjs.Start_32sceneCode.GDTallBlockObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDTallBlockObjects1Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), -(16), "");
}{for(var i = 0, len = gdjs.Start_32sceneCode.GDTallBlockObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDTallBlockObjects1[i].addForce(0, 15, 1);
}
}{for(var i = 0, len = gdjs.Start_32sceneCode.GDBrickObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDBrickObjects1[i].setZOrder(1);
}
}}

}


};gdjs.Start_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Start_32sceneCode.GDStartButtonObjects1);

gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32sceneCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32sceneCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDStartButtonObjects1[i].setColor("74;144;226");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Start_32sceneCode.GDStartButtonObjects1);

gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDStartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32sceneCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32sceneCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDStartButtonObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Start_32sceneCode.GDStartButtonObjects1);

gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Start_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Start_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32sceneCode.mapOfGDgdjs_46Start_9532sceneCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Start_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game scene", true);
}}

}


{


gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "GenTimer");
}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, 4));
}{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GenTimer");
}
{ //Subevents
gdjs.Start_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GenTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Brick"), gdjs.Start_32sceneCode.GDBrickObjects1);

gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32sceneCode.GDBrickObjects1.length;i<l;++i) {
    if ( gdjs.Start_32sceneCode.GDBrickObjects1[i].getY() >= gdjs.evtTools.window.getWindowInnerHeight() + 64 ) {
        gdjs.Start_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Start_32sceneCode.GDBrickObjects1[k] = gdjs.Start_32sceneCode.GDBrickObjects1[i];
        ++k;
    }
}
gdjs.Start_32sceneCode.GDBrickObjects1.length = k;}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32sceneCode.GDBrickObjects1 */
{for(var i = 0, len = gdjs.Start_32sceneCode.GDBrickObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDBrickObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.Start_32sceneCode.GDPlatformObjects1);

gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32sceneCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.Start_32sceneCode.GDPlatformObjects1[i].getY() >= gdjs.evtTools.window.getWindowInnerHeight() + 64 ) {
        gdjs.Start_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Start_32sceneCode.GDPlatformObjects1[k] = gdjs.Start_32sceneCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.Start_32sceneCode.GDPlatformObjects1.length = k;}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32sceneCode.GDPlatformObjects1 */
{for(var i = 0, len = gdjs.Start_32sceneCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDPlatformObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flat"), gdjs.Start_32sceneCode.GDFlatObjects1);

gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32sceneCode.GDFlatObjects1.length;i<l;++i) {
    if ( gdjs.Start_32sceneCode.GDFlatObjects1[i].getY() >= gdjs.evtTools.window.getWindowInnerHeight() + 64 ) {
        gdjs.Start_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Start_32sceneCode.GDFlatObjects1[k] = gdjs.Start_32sceneCode.GDFlatObjects1[i];
        ++k;
    }
}
gdjs.Start_32sceneCode.GDFlatObjects1.length = k;}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32sceneCode.GDFlatObjects1 */
{for(var i = 0, len = gdjs.Start_32sceneCode.GDFlatObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDFlatObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TallBlock"), gdjs.Start_32sceneCode.GDTallBlockObjects1);

gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32sceneCode.GDTallBlockObjects1.length;i<l;++i) {
    if ( gdjs.Start_32sceneCode.GDTallBlockObjects1[i].getY() >= gdjs.evtTools.window.getWindowInnerHeight() + 64 ) {
        gdjs.Start_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Start_32sceneCode.GDTallBlockObjects1[k] = gdjs.Start_32sceneCode.GDTallBlockObjects1[i];
        ++k;
    }
}
gdjs.Start_32sceneCode.GDTallBlockObjects1.length = k;}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32sceneCode.GDTallBlockObjects1 */
{for(var i = 0, len = gdjs.Start_32sceneCode.GDTallBlockObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDTallBlockObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LargeBlock"), gdjs.Start_32sceneCode.GDLargeBlockObjects1);

gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32sceneCode.GDLargeBlockObjects1.length;i<l;++i) {
    if ( gdjs.Start_32sceneCode.GDLargeBlockObjects1[i].getY() >= gdjs.evtTools.window.getWindowInnerHeight() + 64 ) {
        gdjs.Start_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Start_32sceneCode.GDLargeBlockObjects1[k] = gdjs.Start_32sceneCode.GDLargeBlockObjects1[i];
        ++k;
    }
}
gdjs.Start_32sceneCode.GDLargeBlockObjects1.length = k;}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32sceneCode.GDLargeBlockObjects1 */
{for(var i = 0, len = gdjs.Start_32sceneCode.GDLargeBlockObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDLargeBlockObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
{}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Brick"), gdjs.Start_32sceneCode.GDBrickObjects1);

gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Start_32sceneCode.GDBrickObjects1.length;i<l;++i) {
    if ( gdjs.Start_32sceneCode.GDBrickObjects1[i].getWidth() == 1 ) {
        gdjs.Start_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Start_32sceneCode.GDBrickObjects1[k] = gdjs.Start_32sceneCode.GDBrickObjects1[i];
        ++k;
    }
}
gdjs.Start_32sceneCode.GDBrickObjects1.length = k;}if (gdjs.Start_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Start_32sceneCode.GDBrickObjects1 */
{for(var i = 0, len = gdjs.Start_32sceneCode.GDBrickObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDBrickObjects1[i].setWidth(gdjs.randomInRange(4, 16) * 16);
}
}{for(var i = 0, len = gdjs.Start_32sceneCode.GDBrickObjects1.length ;i < len;++i) {
    gdjs.Start_32sceneCode.GDBrickObjects1[i].setHeight(gdjs.randomInRange(1, 3) * 16);
}
}}

}


{


gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Start_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "o");
}if ( gdjs.Start_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Start_32sceneCode.conditionTrue_1 = gdjs.Start_32sceneCode.condition1IsTrue_0;
gdjs.Start_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8539100);
}
}}
if (gdjs.Start_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1 - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


{


gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Start_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
}if ( gdjs.Start_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Start_32sceneCode.conditionTrue_1 = gdjs.Start_32sceneCode.condition1IsTrue_0;
gdjs.Start_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8539900);
}
}}
if (gdjs.Start_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1 - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{


gdjs.Start_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Start_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if ( gdjs.Start_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Start_32sceneCode.conditionTrue_1 = gdjs.Start_32sceneCode.condition1IsTrue_0;
gdjs.Start_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8540756);
}
}}
if (gdjs.Start_32sceneCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1 - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)));
}}

}


{


{
}

}


};

gdjs.Start_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32sceneCode.GDGameTitleObjects1.length = 0;
gdjs.Start_32sceneCode.GDGameTitleObjects2.length = 0;
gdjs.Start_32sceneCode.GDGameTitleObjects3.length = 0;
gdjs.Start_32sceneCode.GDStartButtonObjects1.length = 0;
gdjs.Start_32sceneCode.GDStartButtonObjects2.length = 0;
gdjs.Start_32sceneCode.GDStartButtonObjects3.length = 0;
gdjs.Start_32sceneCode.GDInstructionsObjects1.length = 0;
gdjs.Start_32sceneCode.GDInstructionsObjects2.length = 0;
gdjs.Start_32sceneCode.GDInstructionsObjects3.length = 0;
gdjs.Start_32sceneCode.GDHintsObjects1.length = 0;
gdjs.Start_32sceneCode.GDHintsObjects2.length = 0;
gdjs.Start_32sceneCode.GDHintsObjects3.length = 0;
gdjs.Start_32sceneCode.GDBackgroundObjects1.length = 0;
gdjs.Start_32sceneCode.GDBackgroundObjects2.length = 0;
gdjs.Start_32sceneCode.GDBackgroundObjects3.length = 0;
gdjs.Start_32sceneCode.GDTallBlockObjects1.length = 0;
gdjs.Start_32sceneCode.GDTallBlockObjects2.length = 0;
gdjs.Start_32sceneCode.GDTallBlockObjects3.length = 0;
gdjs.Start_32sceneCode.GDFlatObjects1.length = 0;
gdjs.Start_32sceneCode.GDFlatObjects2.length = 0;
gdjs.Start_32sceneCode.GDFlatObjects3.length = 0;
gdjs.Start_32sceneCode.GDBrickObjects1.length = 0;
gdjs.Start_32sceneCode.GDBrickObjects2.length = 0;
gdjs.Start_32sceneCode.GDBrickObjects3.length = 0;
gdjs.Start_32sceneCode.GDPlatformObjects1.length = 0;
gdjs.Start_32sceneCode.GDPlatformObjects2.length = 0;
gdjs.Start_32sceneCode.GDPlatformObjects3.length = 0;
gdjs.Start_32sceneCode.GDLargeBlockObjects1.length = 0;
gdjs.Start_32sceneCode.GDLargeBlockObjects2.length = 0;
gdjs.Start_32sceneCode.GDLargeBlockObjects3.length = 0;

gdjs.Start_32sceneCode.eventsList1(runtimeScene);
return;

}

gdjs['Start_32sceneCode'] = gdjs.Start_32sceneCode;
