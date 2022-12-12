export default class Navlisteners {
    constructor(dataContainer, contactSection, formSubmision, dataContainerTitle) {
      this.dataContainer = dataContainer;
      this.contactSection = contactSection;
      this.formSubmision = formSubmision;
      this.dataContainerTitle = dataContainerTitle;
    }
  
    ListRemove() {
      this.dataContainer.style.display = 'flex';
      this.contactSection.style.display = 'none';
      this.formSubmision.style.display = 'none';
      this.dataContainerTitle.style.display = 'flex';
  
      if (this.dataContainer.childElementCount === 0) {
        this.dataContainer.style.display = 'none';
      }
    }
  
    addNewRemove() {
      this.dataContainer.style.display = 'none';
      this.formSubmision.style.display = 'flex';
      this.dataContainerTitle.style.display = 'none';
      this.contactSection.style.display = 'none';
    }
  
    ContactRemove() {
      this.formSubmision.style.display = 'none';
      this.dataContainer.style.display = 'none';
      this.contactSection.style.display = 'flex';
      this.dataContainerTitle.style.display = 'none';
    }
  }