gdjs.End_32sceneCode = {};
gdjs.End_32sceneCode.GDGameOverTextObjects1= [];
gdjs.End_32sceneCode.GDGameOverTextObjects2= [];
gdjs.End_32sceneCode.GDFinalScoreObjects1= [];
gdjs.End_32sceneCode.GDFinalScoreObjects2= [];
gdjs.End_32sceneCode.GDReturnButtonObjects1= [];
gdjs.End_32sceneCode.GDReturnButtonObjects2= [];

gdjs.End_32sceneCode.conditionTrue_0 = {val:false};
gdjs.End_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.End_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.End_32sceneCode.mapOfGDgdjs_46End_9532sceneCode_46GDReturnButtonObjects1Objects = Hashtable.newFrom({"ReturnButton": gdjs.End_32sceneCode.GDReturnButtonObjects1});gdjs.End_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.End_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.End_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.End_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game scene", true);
}}

}


};gdjs.End_32sceneCode.mapOfGDgdjs_46End_9532sceneCode_46GDReturnButtonObjects1Objects = Hashtable.newFrom({"ReturnButton": gdjs.End_32sceneCode.GDReturnButtonObjects1});gdjs.End_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FinalScore"), gdjs.End_32sceneCode.GDFinalScoreObjects1);

gdjs.End_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.End_32sceneCode.GDFinalScoreObjects1.length;i<l;++i) {
    if ( gdjs.End_32sceneCode.GDFinalScoreObjects1[i].getString() == "a" ) {
        gdjs.End_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.End_32sceneCode.GDFinalScoreObjects1[k] = gdjs.End_32sceneCode.GDFinalScoreObjects1[i];
        ++k;
    }
}
gdjs.End_32sceneCode.GDFinalScoreObjects1.length = k;}if (gdjs.End_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.End_32sceneCode.GDFinalScoreObjects1 */
{for(var i = 0, len = gdjs.End_32sceneCode.GDFinalScoreObjects1.length ;i < len;++i) {
    gdjs.End_32sceneCode.GDFinalScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ReturnButton"), gdjs.End_32sceneCode.GDReturnButtonObjects1);

gdjs.End_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.End_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.End_32sceneCode.mapOfGDgdjs_46End_9532sceneCode_46GDReturnButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.End_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.End_32sceneCode.GDReturnButtonObjects1 */
{for(var i = 0, len = gdjs.End_32sceneCode.GDReturnButtonObjects1.length ;i < len;++i) {
    gdjs.End_32sceneCode.GDReturnButtonObjects1[i].setColor("208;2;27");
}
}
{ //Subevents
gdjs.End_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ReturnButton"), gdjs.End_32sceneCode.GDReturnButtonObjects1);

gdjs.End_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.End_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.End_32sceneCode.mapOfGDgdjs_46End_9532sceneCode_46GDReturnButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.End_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.End_32sceneCode.GDReturnButtonObjects1 */
{for(var i = 0, len = gdjs.End_32sceneCode.GDReturnButtonObjects1.length ;i < len;++i) {
    gdjs.End_32sceneCode.GDReturnButtonObjects1[i].setColor("0;0;0");
}
}}

}


};

gdjs.End_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_32sceneCode.GDGameOverTextObjects1.length = 0;
gdjs.End_32sceneCode.GDGameOverTextObjects2.length = 0;
gdjs.End_32sceneCode.GDFinalScoreObjects1.length = 0;
gdjs.End_32sceneCode.GDFinalScoreObjects2.length = 0;
gdjs.End_32sceneCode.GDReturnButtonObjects1.length = 0;
gdjs.End_32sceneCode.GDReturnButtonObjects2.length = 0;

gdjs.End_32sceneCode.eventsList1(runtimeScene);
return;

}

gdjs['End_32sceneCode'] = gdjs.End_32sceneCode;
