document.getElementById("uploadImage").addEventListener('change', function(event) {
    var file = event.target.files[0];
    document.getElementById("editImage").src = URL.createObjectURL(file);
    document.getElementById("imageContainer").style.display="flex";
    document.getElementById("editContainer").style.display="flex";
    document.getElementById("newUploadVisual").style.display="flex";
});
document.getElementById("newUploadImage").addEventListener('change', function(event) {
    var file = event.target.files[0];
    document.getElementById("editImage").src = URL.createObjectURL(file);
    resetEdit();
});
document.getElementById("blur").addEventListener('change', function(event){
    var value=document.getElementById("blur").value;
    var filters=document.getElementById("editImage").style.filter.split(" ");
    filters[0]="blur("+value+"px)";
    document.getElementById("editImage").style.filter=filters.join(" ");
});
document.getElementById("brightness").addEventListener('change', function(event){
    var value=document.getElementById("brightness").value;
    var filters=document.getElementById("editImage").style.filter.split(" ");
    filters[1]="brightness("+value+")";
    document.getElementById("editImage").style.filter=filters.join(" ");
});
document.getElementById("contrast").addEventListener('change', function(event){
    var value=document.getElementById("contrast").value;
    var filters=document.getElementById("editImage").style.filter.split(" ");
    filters[2]="contrast("+value+"%)";
    document.getElementById("editImage").style.filter=filters.join(" ");
});
document.getElementById("opacity").addEventListener('change', function(event){
    var value=document.getElementById("opacity").value;
    var filters=document.getElementById("editImage").style.filter.split(" ");
    filters[3]="opacity("+value+"%)";
    document.getElementById("editImage").style.filter=filters.join(" ");
});
document.getElementById("saturation").addEventListener('change', function(event){
    var value=document.getElementById("saturation").value;
    var filters=document.getElementById("editImage").style.filter.split(" ");
    filters[4]="saturate("+value+"%)";
    document.getElementById("editImage").style.filter=filters.join(" ");
});
function resetEdit(){
    document.getElementById("editImage").style.filter="blur(0px) brightness(1) contrast(100%) opacity(100%) saturate(100%)";
    document.getElementById("blur").value=0;
    document.getElementById("brightness").value=1;
    document.getElementById("contrast").value=100;
    document.getElementById("opacity").value=100;
    document.getElementById("saturation").value=100;
}