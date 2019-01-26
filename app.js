(function () {
    $('#addPage').hide();
    $('#verifyPage').hide();
    $('#updatePage').hide();
    $('#deletePage').hide();
    $('#viewPage').show();
})()

const showView = function () {
    $('#addPage').hide();
    $('#verifyPage').hide();
    $('#updatePage').hide();
    $('#deletePage').hide();
    $('#viewPage').show();

    render(employeeList)
};
$('#view').on('click', showView);


const showAdd = function () {
    $('#viewPage').hide();
    $('#verifyPage').hide();
    $('#updatePage').hide();
    $('#deletePage').hide();
    $('#addPage').show();
};

$('#add').on('click', showAdd);


const showVerify = function () {
    $('#addPage').hide();
    $('#viewPage').hide();
    $('#updatePage').hide();
    $('#deletePage').hide();
    $('#verifyPage').show();
};

  /*  const verifyFunc = () {
    if () { return yes }
    else () { return no }
}; */

$('verify').on('click', showVerify);


const showUpdate = function () {
    $('#addPage').hide();
    $('#verifyPage').hide();
    $('#viewPage').hide();
    $('#deletePage').hide();
    $('#updatePage').show();
};

$('update').on('click', showUpdate);


const showDelete = function () {
    $('#addPage').hide();
    $('#verifyPage').hide();
    $('#updatePage').hide();
    $('#viewPage').hide();
    $('#deletePage').show();
};

$('delete').on('click', showDelete);