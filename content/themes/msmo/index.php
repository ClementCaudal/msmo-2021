<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Motors Avenue
 */

get_header();
?>

<main class="entretien">
	<div class="container">
		<?php the_breadcrumb(); ?>
		<h1 class="h2 ff-bold text-uppercase"><?php echo the_title(); ?></h1>
	</div>
	<hr>
	<div class="container">
		<div class="row py-3 mb-lg-5 fs-13">

			<?php echo the_content(); ?><br><br>
            <ul>
                <li class="helvetica-blackcond">Helvetica-BlackCond</li>
                <li class="helvetica-blackcondobl">Helvetica-BlackCondObl</li>
                <li class="helvetica-boldcond">Helvetica-BoldCond</li>
                <li class="helvetica-boldcondobl">Helvetica-BoldCondObl</li>
                <li class="helvetica-roman">Helvetica-Roman</li>
                <li class="helvetica-medium">Helvetica-Medium</li>
                <li class="helvetica-mediumcondobl">Helvetica-MediumCondObl</li>
                <li class="helvetica-regular">Helvetica-Regular</li>
                <li class="helvetica-light">Helvetica-Light</li>
                <div style="background-color: black; padding: 20px; margin:10px; ">
                    <a href="#" class="btn btn-light">Motors Avenue</a>
                </div>
                <a href="#" class="btn btn-grey">Motors Avenue</a>
                <a href="#" class="btn btn-dark">Motors Avenue</a>
                <a href="#" class="btn btn-primary">Motors Avenue</a>
                <a href="#" class="btn btn-red">Motors Avenue</a>
                <a href="#" class="btn btn-light-red">Motors Avenue</a>
                <br><br>
                <select>
                    <option>test a</option>
                    <option>test aaaaaaaaaaaaaaaaaaaaa</option>
                    <option>test a</option>
                    <option>test a</option>
                    <option>test a</option>
                    <option>test a</option>
                </select>
                <input type="text" class="input-search" placeholder="Que recherchez-vous ?">
                <input type="text" placeholder="Placeholder">

                <div class="checkbox-container">
                    <input id="checkbox-custom" type="checkbox">
                    <label for="checkbox-custom">
                        <div class="checkbox-content">
                            <div class="checkbox-label-unchecked">Prix total</div>
                            <div class="checkbox-label-checked">Loyer</div>
                        </div>
                    </label>
                </div>

                <label for="checkbox">checkbox</label>
                <input type="checkbox" name="test" value="checkbox">
<!--                <label for="prix">Prix total</label>-->
<!--                <input type="radio" name="test" value="loyer">-->
<!--                <label for="prix">Loyer</label>-->
            </ul>
		</div>
        <div class="badge badge-yellow">Vente VIP</div>
        <div class="badge badge-xs badge-yellow">Vente VIP</div>
        <div class="badge badge-green">Vente VIP</div>
        <div class="badge badge-xs badge-green">Vente VIP</div>
        <div class="badge badge-blue">Vente VIP</div>
        <div class="badge badge-xs badge-blue">Vente VIP</div>
        <div class="badge badge-grey">Vente VIP</div>
        <div class="badge badge-xs badge-grey">Vente VIP</div>
        <div class="badge badge-light">Vente VIP</div>
        <div class="badge badge-xs badge-light">Vente VIP</div>
        <div class="badge badge-red"><b>100 €</b> / mois</div>
	</div>
</main>
