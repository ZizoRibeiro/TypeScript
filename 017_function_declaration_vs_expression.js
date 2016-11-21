// Function Declaration
function fullName(first, last) {
    return first + " " + last;
}
// Function expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('zizo', 'ribeiro'));
console.log(otherFullName('zizo', 'rib'));
console.log(thirdFullName('zizo', 'eiro'));
//# sourceMappingURL=017_function_declaration_vs_expression.js.map