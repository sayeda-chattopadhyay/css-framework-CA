import { getAllRegisteredProfile } from "../../api/posts/getRegisteredProfiles.mjs";

// create Inner HTML

export function createRegisteredUsersHTML(profiles) {
  const registerdUsersContainer = document.getElementById("registerdUsers");

  profiles.forEach(function (profile) {
    console.log(profile);
    registerdUsersContainer.innerHTML += `<a href="" class="d-flex flex-row mb-3 border border-primary">
                                                <div>
                                                    <img src="${profile.avatar}" alt="${profile.name}">
                                                </div>
                                                <div class="d-flex flex-column mb-3">
                                                    <p class="h4">${profile.name}</p>
                                                    <p>${profile.email}</p>
                                                </div>
                                            </a>`;
  });
}

// createRegisteredUsersHTML(profiles);

getAllRegisteredProfile();
