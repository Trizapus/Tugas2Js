function array(value) {
    const result = value.map (el => {
        const newArr = ""
        return el += newArr
    })
    const split = result[3].split(',')
    //console.log(split);
    result.pop()
    console.log(result, split.join(' '));
}
array(['Hallo', 'nama', 'saya',['Triza', 'Puspitawati',['kelas',['11',['Rpl 1']]]]])
