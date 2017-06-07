"use strict";
function GetKeyword(_a) {
    var id = _a.id, title = _a.title, FirstOrder = _a.FirstOrder, SecondOrder = _a.SecondOrder, ThirdOrder = _a.ThirdOrder, label = _a.label;
    return { id: id, title: title, FirstOrder: FirstOrder, SecondOrder: SecondOrder, ThirdOrder: ThirdOrder, label: label };
}
exports.GetKeyword = GetKeyword;
function GetKeywords(data) {
    return data.map(GetKeyword);
}
exports.GetKeywords = GetKeywords;
