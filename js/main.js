/* FAQ Accordion */
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', e => {
      const groupHeader = e.target.closest('.faq-group-header');
      if (!groupHeader) return;
      const group = groupHeader.parentElement;
      const groupBody = group.querySelector('.faq-group-body');
      const groupIcon = groupHeader.querySelector('i');

      // Toggle Icon
      groupIcon.classList.toggle('fa-minus');
      groupIcon.classList.toggle('fa-plus');

      // Toggle Boydy Visibility
      groupBody.classList.toggle('open');

      // Close Other Open FAQ Bodies
      const otherGroups = faqContainer.querySelectorAll('faq-group');

      otherGroups.forEach(otherGroup => {
        if (otherGroup !== group) {
          const otherGroupBody = otherGroup.querySelector('.faq-group-body');
          const otherIcon = otherGroup.querySelector('.faq-group-header i');

          otherGroupBody.classList.remove('open');
          otherIcon.classList.remove('fa-minus');
          otherIcon.classList.add('fa-plus');
        };
      });
    });

    // Mobile Menu Show
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerBtn = document.querySelector('.hamburger-btn');

    hamburgerBtn.addEventListener('click', () => mobileMenu.classList.toggle('active'));
})