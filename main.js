fetch('data.json').then(response=>{
	return response.json();
}).then(data=>{
	//console.log(data.profile.details);
	profile(data.profile.basics);
	details(data.profile.details);

})

var child1=document.querySelector(".child1");
var child2=document.querySelector(".child2");

var profile=(basic_info)=>{
    //console.log(basic_info);
    var name=document.createElement("h2");
    name.textContent=basic_info.name;
    child1.append(name);

    var role=document.createElement("h4");
	role.textContent=basic_info.role;
	role.classList.add("role");
	child1.append(role);

	var hr=document.createElement("hr");
	child1.append(hr);

	var email=document.createElement("a");
	email.href="mailto:"+basic_info.email;
	email.textContent=basic_info.email;
	child1.append(email);

	var mobile=document.createElement("a");
	mobile.href="tel:"+basic_info.mobile;
	mobile.textContent=basic_info.mobile;
	child1.append(mobile);

	var address=document.createElement("p");
	address.textContent=basic_info.address;
	child1.append(address);

}

var details=(details_info)=>{
	//console.log(details_info);
    var summaryHeading=document.createElement("h3");
	summaryHeading.textContent="Summary";	
	child2.append(summaryHeading);
	

	var list=document.createElement("ul");
	details_info.summary.map(i=>{
		var listitem=document.createElement("li");
		listitem.textContent=i;
		list.append(listitem);
	})

	child2.append(list);
	var hr1=document.createElement("hr");
	child2.append(hr1);

	var careerHeading=document.createElement("h3");
	careerHeading.textContent="Career Objective";
	child2.append(careerHeading);

	var list=document.createElement("ul");
	details_info.careerobjective.map(i1=>{
		var listitem=document.createElement("li");
		listitem.textContent=i1;
		list.append(listitem);
	})

	child2.append(list);
	var hr1=document.createElement("hr");
	child2.append(hr1);

	var personalprofileHeading=document.createElement("h3");
	personalprofileHeading.textContent="Personal Profile";	
	child2.append(personalprofileHeading);
	

	var list=document.createElement("ul");
	details_info.personalprofile.map(i7=>{
		var listitem=document.createElement("li");
		listitem.textContent=i7;
		list.append(listitem);
	})

	child2.append(list);
	var hr1=document.createElement("hr");
	child2.append(hr1);

	var educationHeading=document.createElement("h3");
	educationHeading.textContent="Acadamic Qualifications";	
	child2.append(educationHeading);
	

	var list=document.createElement("ul");
	details_info.education.map(i9=>{
		var listitem=document.createElement("li");
		listitem.textContent=i9;
		list.append(listitem);
	})

	child2.append(list);
	var hr1=document.createElement("hr");
	child2.append(hr1);


	var skillHeading=document.createElement("h3");
	skillHeading.textContent="Technical Skills";
	child2.append(skillHeading);

	details_info.skills.map(j=>{
		var skillType=document.createElement("h3");
		skillType.textContent=j.type;
		child2.append(skillType);

		j.values.map(j_value=>{
			var skillValue=document.createElement("span");
			skillValue.textContent=j_value;
			skillValue.classList.add("skill");
			child2.append(skillValue);
		})
	})
	var skill_hr1=document.createElement("hr");
	child2.append(skill_hr1);

	var skillHeading=document.createElement("h3");
	skillHeading.textContent="Personal Skills";
	child2.append(skillHeading);

	var list=document.createElement("ul");
	details_info.personalskills.map(i3=>{
		var listitem=document.createElement("li");
		listitem.textContent=i3;
		list.append(listitem);
	})

	child2.append(list);
	var skill_hr1=document.createElement("hr");
	child2.append(skill_hr1);

	var achievementHeading=document.createElement("h3");
	achievementHeading.textContent="Achievements";
	child2.append(achievementHeading);

	var list=document.createElement("ul");
	details_info.achievements.map(i5=>{
		var listitem=document.createElement("li");
		listitem.textContent=i5;
		list.append(listitem);
	})

	child2.append(list);
	var achievement_hr1=document.createElement("hr");
	child2.append(achievement_hr1);


	var hobbiesHeading=document.createElement("h3");
	hobbiesHeading.textContent="Hobbies";
	child2.append(hobbiesHeading);

	var list=document.createElement("ul");
	details_info.hobbies.map(i4=>{
		var listitem=document.createElement("li");
		listitem.textContent=i4;
		list.append(listitem);
	})

	child2.append(list);
	var hr1=document.createElement("hr");
	child2.append(hr1);

	var decHeading=document.createElement("h3");
	decHeading.textContent="Declaration";
	child2.append(decHeading);
	

	var list=document.createElement("ul");
	details_info.declaration.map(i6=>{
		var listitem=document.createElement("li");
		listitem.textContent=i6;
		list.append(listitem);
	})

	child2.append(list);





}