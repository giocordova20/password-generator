var password = "rFYBlfWa"
var genRandomTypeFuncs = [ genLower(), genUpper(), genNumber(), genSpecialChar()];

// console.log(verifySelectedTypes2(password));

function verifySelectedTypes2(password){
    // 1. check the types selected - true
    // 2. check the generated pw for the selected type
    // 3. if the selected type is not represented, generate a random character for that type
    // 4. replace duplicated type with the generated random character
    
    var lowerconfirm = true;
    var upperconfirm = true;
    var numconfirm = true;
    var specialconfirm = true;
    
    var selectedTypes = [lowerconfirm, upperconfirm, numconfirm, specialconfirm]; // True/False values of the available types that can be selected
    // var selectedTypes= {lowerconfirm, upperconfirm, numconfirm, specialconfirm}

    console.log("selectedTypes: inverifySelected", selectedTypes);
    console.log("password: ", password);
    console.log("num.leng: ", num.length)

    // * loop through the true (selected types) or use if
    selectedTypes.forEach(myFunction);

    
    // var t = 2;
    // if (selectedTypes[t] == true){ // if number type is true
    //   // verify ? is in the generated pw
    //       for (j=0; j < types[t].length ; j++){

    //         var check = password.includes(types[t].charAt(j))

    //         console.log("checking ", types[t].charAt(j))
            
    //         if (check == false && j == (types[t].length)-1){
    //             console.log(types[t] + " is not in the pw")
    //             console.log("check: ", check)
    //             // console.log(" Calling genRandomTypeFuncs[2]:", genRandomTypeFuncs[t] )
                
    //             console.log(" index of genRandomTypeFuncs[2]:",  t )

    //             // call the function to generate a random character for the missing type
    //             password = checkForMultipleTypes(password,t)

    //             console.log(" The password returned form checkForMultipleTypes is:" )
    //             return password
    //         }
    //     }       
    // }
//   return password

}

function myFunction(item, t, selectedTypes){
 var typeLength = types[t].length
    console.log("##########################################################################################")
    console.log("##########################################################################################")
    console.log("-------------------------- myFunction -----------------------------")
    console.log("########## t: " + (t)  + " item: ", item )
    console.log("########## password: ", password)
    console.log("########## types: ", types)
    console.log("########## typeLength: " , typeLength)
    console.log("########## typeLength: " , typeof(typeLength))
    console.log("########## selectedTypes: ", selectedTypes)
    console.log("##########################################################################################")
    
    
    if (item == true){ // if the selected type is true
        console.log("     ************** in the if **********************************")
        
        // verify that any item of the selected type is in the generated pw
        for (j=0; j < typeLength ; j++){
            console.log("     +++++++++++++++++++ in the types for +++++++++++++++++++")
            var check = password.includes(types[t].charAt(j))
            
            console.log("        +++++ checking types[t].charAt(j): ", types[t].charAt(j))
            console.log("        +++++ check: ", check)
            console.log("        +++++ j: ", j)
            console.log("        +++++ typeLength: ", j)


            if (check == true ){
                console.log("             %%%%%%%% types[t].charAt(j) :'" + types[t].charAt(j) + "' is in the generated pw: " + password + "  %%%%%%%%") 
                console.log("             %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
                return

            } else if (check == false && j == typeLength-1){
                console.log("     *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
                console.log("     ************************** " + types[t] + " is not in the pw ************************")
                console.log("     check: ", check)
                console.log("     index of genRandomTypeFuncs[2]:",  t )
                console.log("     passing password: ", password, " t: ", t)
                console.log("     j: ", j )
                console.log("     *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
                
                // call the function to generate a random character for the missing type
                password = checkForMultipleTypes(password,t, selectedTypes) //''''''''''''''''''''''
                
                console.log(" The password returned form checkForMultipleTypes is: " )
                return password
            }
        }       
    }
}  
 function checkForMultipleTypes(password, t, selectedTypes){
    var typeLength = types[t].length
        console.log("888888888888888888888888888888888888888888888888888888888888888888")
        console.log("8888888888 ==================== checkForMultipleTypes =======================")
        console.log("8888888888 password: ", password ); 
        console.log("8888888888 t: ", t );
        console.log("8888888888 genRandomTypeFuncs: types[t]", types[t]);
        console.log("8888888888 types: ", types);
        console.log("888888888888888888888888888888888888888888888888888888888888888888")

        var exists = 0;
        var p = 0;
        // for each selected type = true
        // selectedTypes.forEach(checkMultiple)

        console.log("selectedTypes" , selectedTypes)

        if (selectedTypes == true )
            for (j=0; j < types[p].length ; j++){
                var check = password.includes(types[p][t].charAt(j))
                console.log("     88888 check is: ", check)
                console.log("     88888 selectedTypes[p].length: ", selectedTypes[p].length)
                console.log("     88888 types[t].charAt(j): ", types[t].charAt(j))
                var temp = types[t].charAt(j)
                console.log("     88888 checking For Multiple Types: ", temp )
                
                if (check == true) {
                    console.log("     vvvvvvvvvvvvvvvv")
                    exists++ ; // Increment type count
                    console.log("     " + types.charAt(j) + " is in the pw")
                    console.log("     check: ", check)
                    console.log("     vvvvvvvvvvvvvvvv")
        
                    if (exists == 2){
                        console.log ("              This type appears in the pw twice")
                        console.log ("              The new password is : ")
        
                        // call the function to generate a random character for the missing type
                        password = password.replace(upper.charAt(j),genNumber());
                        console.log ("              "+ password)

                        return password
                    }
                } p++
            }
        return password
    
    }



//console.log("checkForMultipleTypes: ", checkForMultipleTypes("rFYBlfWa"))


